import torch
import torch.nn as nn
import math
#from transformers import AutoModelForCausalLM, AutoTokenizer

class LSTM(nn.Module):
    def __init__(self, input_size, lstm_layer_sizes, output_size):
        super(LSTM, self).__init__()

        self.input_size = input_size

        self.lstm_layer_1 = nn.LSTM(input_size, lstm_layer_sizes[0], batch_first=True)
        self.lstm_layer_2 = nn.LSTM(lstm_layer_sizes[0], lstm_layer_sizes[1], batch_first=True)
        self.lstm_layer_3 = nn.LSTM(lstm_layer_sizes[1], lstm_layer_sizes[2], batch_first=True)

        self.fc = nn.Linear(lstm_layer_sizes[2], output_size)

    def forward(self, x):

        out, (hn_1, cn_1) = self.lstm_layer_1(x)
        out, (hn_2, cn_2) = self.lstm_layer_2(out)
        out, (hn_3, cn_3) = self.lstm_layer_3(out)

        out = hn_3[-1]
        out = self.fc(out)
        return out
    
    
class Linear(nn.Module):
    def __init__(self,input_size,output_size):
        super(Linear,self).__init__()
        
        self.relu =nn.relu()
        self.input = nn.Linear(input_size,1024)
        self.fc = nn.Linear(1024,256)
        self.output = nn.Linear(256,output_size)

    def forward(self,x):
        out = self.relu(self.input(x))
        out = self.relu(self.fc(out))
        out = self.relu(self.output(out))
        return out[:, -1, :]
    
class PositionalEncoding(nn.Module):
    def __init__(self, dim, max_len=300):
        super(PositionalEncoding, self).__init__()
        pe = torch.zeros(max_len, dim)
        position = torch.arange(0, max_len, dtype=torch.float).unsqueeze(1)
        div_term = torch.exp(torch.arange(0, dim, 2).float() * (-math.log(10000.0) / dim))
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        pe = pe.unsqueeze(0).transpose(0, 1)
        self.register_buffer('pe', pe)

    def forward(self, x):
        return x + self.pe[:x.size(0), :]
    
class Transformer(nn.Module):
    def __init__(self):
        super(Transformer,self).__init__()