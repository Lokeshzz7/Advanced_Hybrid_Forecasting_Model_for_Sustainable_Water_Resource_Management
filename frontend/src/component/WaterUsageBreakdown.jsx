import React from 'react';

function WaterUsageBreakdown() {
  const sectors = [
    { name: 'Agriculture', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0087490866a43b726e8280fa5c3566d604130ec935866ce79bcb05d2a523f412?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859', percentage: '23%', color: 'bg-yellow-400' },
    { name: 'Doesmetic', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1ca076e0ff7482cf836d23d56cf5b81b559ebc5c4fd907cc9165a6332bc2610?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859', percentage: '98%', color: 'bg-red-500' },
    { name: 'Others', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7b63ad0037aa9e8c289a69decb9abc0d4fd90a9de015479a65c1e9eb03463712?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859', percentage: '67%', color: 'bg-purple-700' }
  ];

  return (
    <div className="flex flex-col pt-3 pl-4 w-full font-medium bg-black rounded-3xl shadow-[0px_4px_10px_rgba(80,80,80,0.05)] max-md:max-w-full">
      <div className="flex gap-5 justify-between max-w-full text-sm text-black w-[212px]">
        <div>sector</div>
        <div>Water use</div>
      </div>
      <div className="flex flex-col mt-2.5 w-full whitespace-nowrap text-slate-400 max-md:max-w-full">
        {sectors.map((sector, index) => (
          <div key={index} className="flex flex-wrap gap-10 py-1 w-full max-md:max-w-full">
            <div className="flex flex-auto gap-4 items-center text-sm">
              <img loading="lazy" src={sector.icon} alt="" className="object-contain shrink-0 self-stretch aspect-square rounded-[200px] w-[35px]" />
              <div className="self-stretch my-auto">{sector.name}</div>
              <div className={`flex shrink-0 self-stretch my-auto h-1 rounded-sm ${sector.color} bg-opacity-20 w-[241px]`} />
            </div>
            <div className="grow shrink my-auto text-xs text-right w-[90px]">{sector.percentage}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WaterUsageBreakdown;