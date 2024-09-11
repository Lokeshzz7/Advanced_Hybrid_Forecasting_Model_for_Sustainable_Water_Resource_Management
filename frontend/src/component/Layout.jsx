import React from 'react';
import Header from './Header';
import FilterSection from './FilterSection';
import WaterUsageSection from './WaterUsageSection';

function Layout() {
  return (
    <div className="flex overflow-hidden flex-col items-center px-8 py-8 bg-stone-950 max-md:px-5">
      <Header />
      <FilterSection />
      <main className="mt-8 w-full max-w-[1367px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <WaterUsageSection />
          <WaterUsageSection />
        </div>
      </main>
      <section className="mt-14 w-full max-w-[1351px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <WaterUsageSection />
          <WaterUsageSection />
        </div>
      </section>
    </div>
  );
}

export default Layout;