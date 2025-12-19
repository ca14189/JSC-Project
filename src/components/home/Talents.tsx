// "use client"

// import React from 'react';

// interface SectionItemComponent {
//   name: string;
//   type: 'text' | 'media';
//   data: string;
//   media_ref?: string;
//   title?: string;
// }
// interface TalentsItem {
//   talantdata: SectionItemComponent[];
// }

// const Talents: React.FC<TalentsItem> = ({ talantdata }) => {
//   //console.log("talantdata", talantdata);
//   if (!talantdata || talantdata.length < 2) return null; // or return a loader  

//   const allTalentData = talantdata?.[0]?.data ?? [];
//   const title = allTalentData?.slice(0, 11) ?? '';
//   const secondTitle = allTalentData?.slice(11, 63) ?? '';

//   const talentDetailsData = talantdata.slice(2) ?? [];


//   return (
//     <div className="mt-32">
//       <p className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl w-[80%] mx-auto font-extrabold text-center text-gray-900">
//         <span className="bg-amber-500 px-[10px] py-[1px]">{title}</span> {secondTitle}
//       </p>

//       <div className="flex flex-wrap justify-center md:mt-7 sm:mt-5 mt-3">
//         {talentDetailsData.map((talent: SectionItemComponent, index: number) => (

//           <div
//   key={index}
//   className="lg:w-[35%] md:w-[40%] sm:w-[45%] w-[70%] rounded-xl mt-10 lg:mx-10 md:mx-5 sm:mx-3 transition duration-300 hover:shadow-2xl hover:scale-105 bg-white"
// >
//   <p className="w-full bg-amber-500 lg:text-3xl md:text-2xl sm:text-xl text-xl text-center rounded-t-lg py-2 font-bold text-white">
//     {talent.title}
//   </p>
//   <p className="w-full bg-gray-100 md:text-xl sm:text-lg text-base text-center py-4 font-semibold px-4 rounded-b-lg text-gray-800">
//     {talent.data}
//   </p>
// </div>

//         ))}    </div>
//     </div>
//   );
// };

// export default Talents;
'use client';

import React from 'react';

interface SectionItemComponent {
  name: string;
  type: 'text' | 'media';
  data: string;
  media_ref?: string;
  title?: string;
}

interface TalentsItem {
  talantdata: SectionItemComponent[];
}

const Talents: React.FC<TalentsItem> = ({ talantdata }) => {
  if (!talantdata || talantdata.length < 2) return null;

  const cards = talantdata.slice(2);

  return (
    <div className="mt-16 sm:mt-20 md:mt-28 px-4 sm:px-6">
      {/* Heading */}
    <div className="text-center max-w-5xl mx-auto leading-tight">
  <p className="headingThird !max-w-none">
    Our Talents are Pre-screened & Pre-assessed <br />
    <span className="text-brandlight">on these Criteria</span>
  </p>
</div>



      {/* Cards in 2 columns */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {cards.map((talent, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            {/* Card Title */}
            <div className="bg-brandlight py-4 text-center rounded-t-2xl">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white px-4">
                {talent.title}
              </h3>
            </div>
            {/* Card Body */}
            <div className="px-5 py-6 bg-white text-center rounded-b-2xl">
              <p className="text-sm sm:text-base md:text-lg font-medium text-grayLight leading-relaxed">
                {talent.data}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Talents;
