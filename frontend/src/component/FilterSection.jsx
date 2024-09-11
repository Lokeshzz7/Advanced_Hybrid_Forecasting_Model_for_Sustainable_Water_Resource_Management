import React from 'react';
import FilterButton from './FilterDropdown';

function FilterSection() {
  const filters = [
    { label: 'State', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/534d63be5c97680417281874263ce9d8ba0fc11e21fca1ae17603e5abdd66e0a?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859' },
    { label: 'City', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d5c9e036dd2e0210c71b452515a9227d3f6eb317ee01b1a5959209b502ffe537?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859' },
    { label: 'District', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f621e51a2348d60a38451de735da2668719e93f3d564d936ecf2342a19bbd2c5?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859' },
    { label: 'Reservoir', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9688e11bf685ce9b480bae007106cf96e2dc8a16e2f7d0526da7d257fa6665f6?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859' }
  ];

  return (
    <section className="flex flex-wrap gap-10 justify-between items-center mt-8 w-full text-2xl font-bold tracking-tight leading-none text-blue-500 whitespace-nowrap max-w-[1382px] shadow-[3px_2px_4px_rgba(0,122,255,0.87)] max-md:max-w-full">
      {filters.map((filter, index) => (
        <FilterButton key={index} label={filter.label} icon={filter.icon} />
      ))}
    </section>
  );
}

export default FilterSection;