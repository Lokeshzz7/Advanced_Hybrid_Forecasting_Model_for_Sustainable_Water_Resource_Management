import React from 'react';

const FilterDropdown = ({ label }) => {
  return (
    <div className="flex flex-col self-stretch my-auto min-w-[240px] rounded-[40px] w-[274px]">
      <div className="flex flex-col justify-center px-7 py-3.5 w-full bg-violet-50 rounded-[40px] max-md:px-5">
        <div className="flex gap-10 justify-between items-center w-full">
          <div className="self-stretch my-auto">{label}</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8d63bd77be98f1a1be0a22baa6d12873224d08c06522298d5eac1d08eea76b?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;