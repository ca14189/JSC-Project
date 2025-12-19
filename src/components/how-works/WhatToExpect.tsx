'use client';

interface WhatToExpectItems {
  whatToExpectData:{type:string,data:string,title?:string}[];
}

const WhatToExpect = ({whatToExpectData} :WhatToExpectItems) => {
  //console.log("whatToExpectData", whatToExpectData);
const safeData = whatToExpectData ?? [];

const words = safeData[0]?.data ?? '';
const expectation = safeData.slice(1);

// ====old===
  // const words = whatToExpectData?.[0]?.data;
  // const expectation = whatToExpectData.slice(1);
 // console.log("headinng>>>>>", words);
  
  return (
    <div className="mt-10 w-[90%] max-w-7xl mx-auto px-4">
      {/* Header */}
      <div>
        <p className="headingGlobal font-bold text-[#343434] mb-10">
          <span className="text-3xl uppercase">{words}</span> 
        </p>
      </div>

      {/* Expectation Cards */}
      <div className=" rounded-2xl p-6 md:ml-[10%] md:w-[80%] mx-auto">
        <ul className="flex flex-wrap justify-center gap-6">
            {expectation.map((item: { title?: string; data: string }, index: number) => (
            <li
              key={index}
              className="w-full sm:w-[90%] md:w-[45%] lg:w-[40%] p-6 rounded-2xl bg-white shadow-lg 
                     hover:shadow-2xl hover:scale-105 
                     transition-all duration-300 ease-in-out border border-x-brandlight border-y-brandlight"
            >
              <h3 className="text-xl font-bold uppercase text-[#343434] hover:text-brandlight">
                {item.title}
              </h3>
              <p className="mt-4 text-sm md:text-base textBody font-light tracking-tight text-grayLight">
                {item.data}
              </p>
            </li>
          ))}
        </ul>
      </div>

      
      
    </div>
  );
};

export default WhatToExpect;
