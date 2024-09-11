import React from 'react';
import WaterUsageChart from './WaterUsageChart';
import WaterUsageBreakdown from './WaterUsageBreakdown';

function WaterUsageSection() {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-7 self-start">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/26954be2-a698-4e78-b386-feb4120f1f56?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" alt="" className="object-contain shrink-0 aspect-[1.85] bg-stone-950 rounded-[40px] w-[85px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/651c5f15-2a78-44ca-bfec-16cec4de5963?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" alt="" className="object-contain shrink-0 aspect-[1.85] bg-stone-950 rounded-[40px] w-[85px]" />
        </div>
        <WaterUsageChart />
        <WaterUsageBreakdown />
      </div>
    </div>
  );
}

export default WaterUsageSection;