import React from 'react';

const DataVisualizations = () => {
  return (
    <div className="flex flex-col w-full max-md:mt-9 max-md:max-w-full">
      <div className="max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-1 max-md:flex-col">
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 mx-auto max-w-full bg-stone-300 h-[328px] w-[301px] max-md:mt-10" role="img" aria-label="Data visualization 2"></div>
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 mx-auto max-w-full bg-stone-300 h-[328px] w-[301px] max-md:mt-10" role="img" aria-label="Data visualization 2"></div>
          </div>
        </div>
      </div>
      <div className="flex shrink-0 mt-12 ml-3 max-w-full bg-stone-300 h-[328px] w-[629px] max-md:mt-10" role="img" aria-label="Data visualization 3"></div>
    </div>
  );
};

export default DataVisualizations;