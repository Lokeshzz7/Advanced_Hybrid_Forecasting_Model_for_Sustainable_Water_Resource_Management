import os
import pandas as pd
import numpy as np
import torch
from torch.utils.data import Dataset, DataLoader
from sklearn.preprocessing import StandardScaler

class WaterDataset(Dataset):
    def __init__(self, sequence_length=5, transform=None):
        """
        Initializes the dataset by loading LUC, population, and usage data, merging them 
        based on year and state, and creating sequences of data for training.
        
        Args:
            sequence_length (int): The length of each data sequence for time series forecasting.
            transform (callable, optional): Optional transform to be applied on a sample.
        """
        self.sequence_length = sequence_length
        self.luc = pd.read_csv('data/luc.csv')
        self.population = pd.read_csv('data/population.csv')
        self.usage = pd.read_csv('data/usage.csv')
        self.transform = transform

        self.years = sorted(set(self.usage['Year']))
        self.states = sorted(set(self.usage['State']))
        self.all_years = sorted(set(self.population['Year']))

        self.df = self.merge_data()
        self.x, self.y = self.create_sequence()
        
        self.scaler = StandardScaler()
        self.x = self.scaler.fit_transform(self.x.reshape(-1, self.x.shape[-1])).reshape(self.x.shape)

    def merge_data(self):
        """
        Merges land use classification (LUC) and population data based on year and state.
        
        Returns:
            pd.DataFrame: A DataFrame with merged data on population, urban/rural breakdown, 
                          and LUC attributes for each year and state.
        """
        merged_data = []

        for year, state in [(y, s) for y in self.all_years for s in self.states]:
            population_data = self.population[(self.population['Year'] == year)]
            luc_data = self.luc[(self.luc['Year'] == year) & (self.luc['State'] == state)]

            if not population_data.empty and not luc_data.empty:
                combined_data = {
                    'year': year,
                    'state': state,
                    'population': population_data['Population'].values[0],
                    'urban_population': population_data['Urban Population'].values[0],
                    'rural_population': population_data['Rural Population'].values[0],
                    'forest': luc_data['Forest'].values[0],
                    'barren': luc_data['Barren'].values[0],
                    'others': luc_data['Others'].values[0],
                    'fallow': luc_data['Fallow'].values[0],
                    'cropped': luc_data['Cropped'].values[0]
                }
                merged_data.append(combined_data)

        return pd.DataFrame(merged_data)

    def create_sequence(self):
        """
        Creates sequences of input data and their corresponding labels for training.
        
        Returns:
            tuple: Two numpy arrays, one for data sequences and one for label sequences.
        """
        data_sequences, label_sequences = [], []
        missing_sequences = {state: [] for state in self.states}

        for state in self.states:
            state_data = self.df[self.df['state'] == state].sort_values('year')
            usage_state_data = self.usage[self.usage['State'] == state]

            for i in range(len(state_data) - self.sequence_length):
                sequence = state_data.iloc[i:i + self.sequence_length]
                year = sequence['year'].values[-1] + 1

                usage_label = usage_state_data[usage_state_data['Year'] == year]
                
                if len(sequence) == self.sequence_length and not usage_label.empty:
                    data_sequences.append(sequence[['population', 'urban_population', 'rural_population', 
                                                    'forest', 'barren', 'others', 'fallow', 'cropped']].values.astype(np.float32))
                    label_sequences.append(usage_label[['Domestic', 'Industrial', 'Irrigation']].values[0].astype(np.float32))
                else:
                    missing_sequences[state].append(year)

        return np.array(data_sequences), np.array(label_sequences)

    def __len__(self):
        return len(self.x)

    def __getitem__(self, index):
        return (torch.tensor(self.x[index], dtype=torch.float32), 
                torch.tensor(self.y[index], dtype=torch.float32))
