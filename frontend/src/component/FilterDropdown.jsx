import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';
import AreaFilter from './AreaFilter';
import DateFilter from "./DateFilter";
import data from '../Data/sample_data.json'

const FilterDropdown = () => {
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);
  const [selectedItem3, setSelectedItem3] = useState(null);
  const [reservoir, setReservoir] = useState([]);  // For storing reservoir options
  const [selectedReservoir, setSelectedReservoir] = useState(null);  // For storing selected reservoir
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [states, setStates] = useState([]);

  // First useEffect to process unique years from data
  useEffect(() => {
    const uniqueYears = [
      ...new Set(data.map((item) => item.year))
    ].map((year) => ({ label: year, value: year }));

    setYears(uniqueYears);
  }, []);  

  useEffect(() => {
    const uniqueStates = [
      ...new Set(data.map((item) => item.state))
    ].map((state) => ({ label: state, value: state }));

    setStates(uniqueStates);
  }, []);

  // Second useEffect to fetch reservoir data
  useEffect(() => {
    axios.get('https://balanced-connection-production.up.railway.app/api/reservoirs/')
      .then(response => {
        const transformedData = response.data.map(item => ({
          label: item.reservoir_name,
          value: item.reservoir_name
        }));
        setReservoir(transformedData);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);


  
  return (
    <section className="flex flex-wrap gap-5 justify-between mt-9 w-full whitespace-nowrap max-w-[1358px] max-md:max-w-full">
      <AreaFilter />
      <section className="flex flex-wrap gap-5 justify-between mt-9 w-full whitespace-nowrap max-w-[1358px] max-md:max-w-full">
      <Dropdown
          value={selectedItem1}
          onChange={(e) => setSelectedItem1(e.value)}
          options={states}
          editable placeholder="Select a State"
          className="w-full md:w-40 h-12 border-black border-2 px-5 py-2 rounded-2xl"
        />
        {/* <Dropdown
          value={selectedItem2}
          onChange={(e) => setSelectedItem2(e.value)}
          options={items}
          virtualScrollerOptions={{ itemSize: 58 }}
          placeholder="City"
          className="w-full md:w-40 h-12 border-black border-2 px-5 py-2 rounded-2xl"
        />
        <Dropdown
          value={selectedReservoir}
          onChange={(e) => setSelectedReservoir(e.value)}
          options={reservoir}
          virtualScrollerOptions={{ itemSize: 58 }}
          placeholder="Reservoir"
          className="w-full md:w-40 h-12 border-black border-2 px-5 py-2 rounded-2xl"
        />
        <Dropdown
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.value)}
            options={months}
            virtualScrollerOptions={{ itemSize: 58 }}
            placeholder="Month"
            className="w-full md:w-40 h-12 border-black border-2 px-5 py-2 rounded-2xl"
          /> */}
        {/* Year */}
        <Dropdown
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.value)}
          options={years}
          editable placeholder="Select a Year"
          className="w-full md:w-40 h-12 border-black border-2 px-5 py-2 rounded-2xl"
        />
      </section>
    </section>
  );
};

export default FilterDropdown;
