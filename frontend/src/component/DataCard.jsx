import React from 'react';

const DataCard = ({ title, value, unit, subtitle, subtitleValue }) => {
  return (
    <div className="flex flex-col px-2 py-9  w-full bg-white rounded-3xl shadow-[12px_13px_26px_rgba(0,122,255,0.46)] max-md:px-5 max-md:mt-3">
      
      <div className="flex gap-1.5">
        <div className="flex flex-col">
          <div className="self-start text-xs text-slate-400">{title}</div>
          <div className="mt-8 text-8xl font-bold text-blue-500 max-md:text-4xl">{value}</div>
        </div>
        <div className="self-end mt-24 text-xs text-amber-500 max-md:mt-10">
          <span className="font-medium">{unit}</span>
        </div>
        
      </div>

      <div className="flex gap-1.5 mt-5">
        <div className="flex flex-col">
          <div className="self-start text-xs text-slate-400">{title}</div>
          <div className="mt-8 text-8xl font-bold text-blue-500 max-md:text-4xl">{value}</div>
        </div>
        <div className="self-end mt-24 text-xs text-amber-500 max-md:mt-10">
          <span className="font-medium">{unit}</span>
        </div>
        
      </div>
      
      
    </div>
  );
};

export default DataCard;