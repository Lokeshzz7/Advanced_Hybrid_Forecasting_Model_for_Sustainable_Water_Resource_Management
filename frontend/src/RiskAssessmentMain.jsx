import React from 'react';

import FilterDropdown from './component/FilterDropdown';
import RiskAssessment from './component/RiskAssessment';
import DataVisualizations from './component/DataVisualizations';

const WaterManagementDashboard = () => {
  const filterOptions = ['State', 'City', 'District', 'Reservoir'];

  return (
    <main className="flex overflow-hidden flex-col px-8 py-6 bg-white max-md:px-5">
      <section className="flex flex-wrap gap-10 justify-between items-center mt-8 w-full text-2xl tracking-tight leading-none text-black whitespace-nowrap max-w-[1382px] max-md:max-w-full">
        <FilterDropdown label="State" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8d63bd77be98f1a1be0a22baa6d12873224d08c06522298d5eac1d08eea76b?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" />
        <FilterDropdown label="City" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7a5802ef7d198b433d8800eae412e1dfb471efb83a4f6166ae7a39e5cd2cadcb?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" />
        <FilterDropdown label="District" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/666bca0651e10b86e1a9e9451bedb667fc363ceb234c71ead2aa61caaed3ee95?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" />
        <FilterDropdown label="Reservoir" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8d63bd77be98f1a1be0a22baa6d12873224d08c06522298d5eac1d08eea76b?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" />
      </section>
      <section className="flex flex-wrap gap-10 items-start self-center mt-7 w-full max-w-[1382px] max-md:max-w-full">
        <div className="flex flex-1 gap-4">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/201125e63a82de931cc397f62675df8860522fd3bd1ba85b08d14831707d8a8f?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" className="object-contain shrink-0 aspect-[1.98] rounded-[40px] w-[79px]" alt="" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16be519ace082f911bad2d6ad63eb6ff0b0c1e6945ce35c91c856f8bf3a58236?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" className="object-contain shrink-0 aspect-[1.98] rounded-[40px] w-[79px]" alt="" />
        </div>
        <div className="flex flex-1 gap-4 mt-2">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/201125e63a82de931cc397f62675df8860522fd3bd1ba85b08d14831707d8a8f?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" className="object-contain shrink-0 aspect-[1.98] rounded-[40px] w-[79px]" alt="" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16be519ace082f911bad2d6ad63eb6ff0b0c1e6945ce35c91c856f8bf3a58236?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" className="object-contain shrink-0 aspect-[1.98] rounded-[40px] w-[79px]" alt="" />
        </div>
      </section>
      <section className="mt-9 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <RiskAssessment />
          </div>
          <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <DataVisualizations />
          </div>
        </div>
      </section>
    </main>
  );
};

export default WaterManagementDashboard;