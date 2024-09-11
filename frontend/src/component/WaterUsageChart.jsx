import React from 'react';

function WaterUsageChart() {
  return (
    <div className="flex flex-col py-1 mt-6 w-full bg-black rounded-3xl shadow-[0px_4px_10px_rgba(80,80,80,0.05)] max-md:max-w-full">
      <div className="max-w-full w-[537px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-7">
              <div className="self-start text-xs text-slate-400">All used water</div>
              <div className="self-end mt-6 text-8xl font-bold text-blue-500 max-md:text-4xl">35.25</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-1 max-md:mt-8">
              <div className="flex flex-col items-start pl-4">
                <div className="text-xs text-slate-400">Water limit</div>
                <div className="text-lg font-medium text-black">40 gal</div>
              </div>
              <div className="self-start mt-9 text-xs text-amber-500">
                <span className="font-medium">galH</span>
                <span className="font-medium">2</span>
                <span className="font-medium">O</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-5 w-full text-xs whitespace-nowrap max-md:mt-10">
              <div className="gap-2.5 self-end px-3 py-2 text-center text-white bg-blue-500 rounded-3xl">19%</div>
              <div className="flex flex-col mt-5 min-h-[55px] text-slate-400 w-[82px]">
                <div className="flex gap-2.5 w-full rounded-sm text-slate-400">
                  <div className="flex shrink-0 my-auto w-2.5 bg-yellow-400 rounded-sm h-[11px]" />
                  <div>Agriculture</div>
                </div>
                <div className="flex gap-2.5 mt-1.5 w-full rounded-sm">
                  <div className="flex shrink-0 my-auto w-2.5 bg-red-500 rounded-sm h-[11px]" />
                  <div>Doesmetic</div>
                </div>
                <div className="flex gap-2.5 mt-1.5 rounded-sm w-[58px]">
                  <div className="flex shrink-0 my-auto w-2.5 bg-purple-700 rounded-sm h-[11px]" />
                  <div>Others</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaterUsageChart;