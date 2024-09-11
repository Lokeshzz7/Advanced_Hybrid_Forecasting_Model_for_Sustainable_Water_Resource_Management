import React from "react";
import Header from "./component/Header.jsx";
import FilterDropdown from "./component/FilterDropdown.jsx";
import IconGroup from "./component/IconGroup.jsx";
import MainContent from "./component/MainContent.jsx";

const ScenarioPlanning = () => {
  return (
    <div className="flex overflow-hidden flex-col p-8 bg-white max-md:px-5">
      <section className="flex flex-wrap gap-10 justify-between items-center mt-8 w-full text-2xl tracking-tight leading-none text-black whitespace-nowrap max-w-[1382px] max-md:max-w-full">
        <FilterDropdown label="State" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8d63bd77be98f1a1be0a22baa6d12873224d08c06522298d5eac1d08eea76b?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" />
        <FilterDropdown label="City" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7a5802ef7d198b433d8800eae412e1dfb471efb83a4f6166ae7a39e5cd2cadcb?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" />
        <FilterDropdown label="District" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/666bca0651e10b86e1a9e9451bedb667fc363ceb234c71ead2aa61caaed3ee95?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" />
        <FilterDropdown label="Reservoir" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8d63bd77be98f1a1be0a22baa6d12873224d08c06522298d5eac1d08eea76b?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" />
      </section>
      <IconGroup />
      <MainContent />
    </div>
  );
};

export default ScenarioPlanning;
