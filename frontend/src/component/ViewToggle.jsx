import React from 'react';

function ViewToggle() {
  return (
    <div className="flex flex-wrap gap-10 text-3xl tracking-tight leading-none text-black max-md:max-w-full">
      <button className="px-11 py-3.5 bg-violet-50 rounded-xl max-md:px-5">Report</button>
      <button className="px-16 py-3.5 bg-violet-50 rounded-xl max-md:px-5">Data</button>
    </div>
  );
}

export default ViewToggle;