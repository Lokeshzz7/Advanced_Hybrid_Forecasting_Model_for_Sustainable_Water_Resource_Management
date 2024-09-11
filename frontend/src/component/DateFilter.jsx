import React from 'react';

function DateFilter() {
  return (
    <div className="flex gap-3.5 text-3xl tracking-tighter leading-none text-blue-500">
      <div className="flex gap-2 items-start px-9 pt-3.5 pb-1.5 bg-violet-50 rounded-[40px] max-md:px-5">
        <div>April</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b5048618545c125c45aecd46dc70cbb49ce148207ece0dfcd69aacc33d7041c?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" alt="" className="object-contain shrink-0 aspect-[0.94] w-[31px]" />
      </div>
      <div className="flex gap-2.5 px-9 py-2.5 bg-violet-50 rounded-[40px] max-md:px-5">
        <div className="grow my-auto">2021</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b5048618545c125c45aecd46dc70cbb49ce148207ece0dfcd69aacc33d7041c?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" alt="" className="object-contain shrink-0 aspect-[0.94] w-[31px]" />
      </div>
    </div>
  );
}

export default DateFilter;