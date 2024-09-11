import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';


function DateFilter() {
  const [selectedItem1, setSelectedItem1] = useState(null);


  const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

  return (
    <section className="flex flex-wrap gap-10 justify-between items-center mt-4 w-min text-2xl tracking-tight leading-none text-black whitespace-nowrap max-w-[1382px]">
      <div className="card flex justify-content-center">
        <div className="flex flex-row gap-[100px]">
        <Dropdown
          value={selectedItem1}
          onChange={(e) => setSelectedItem1(e.value)}
          options={items}
          virtualScrollerOptions={{ itemSize: 58 }}
          placeholder="Month"
          className="w-full md:w-40 h-12  border-black border-2 px-5 py-2"
        />
          <Dropdown
          value={selectedItem1}
          onChange={(e) => setSelectedItem1(e.value)}
          options={items}
          virtualScrollerOptions={{ itemSize: 58 }}
          placeholder="Year"
          className="w-full md:w-40 h-12  border-black border-2 px-5 py-2"
        />
        </div>
      </div>
    </section>
  );
}

export default DateFilter;