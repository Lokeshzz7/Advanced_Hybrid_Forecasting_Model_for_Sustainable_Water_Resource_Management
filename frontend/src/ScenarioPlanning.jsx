import React from "react";
import Header from "./component/Header.jsx";
import FilterDropdown from "./component/FilterDropdown.jsx";
import IconGroup from "./component/IconGroup.jsx";
import MainContent from "./component/MainContent.jsx";

const ScenarioPlanning = () => {
  return (
    <div className="flex overflow-hidden flex-col p-8 bg-white max-md:px-5">
      <FilterDropdown />
      <IconGroup />
      <MainContent />
    </div>
  );
};

export default ScenarioPlanning;
