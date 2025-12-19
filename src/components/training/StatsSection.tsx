import React from "react";

interface SectionItemComponent {
  type: string;
  data: string;
  name: string;
  title?: string;
}

interface StatsSectionProps {
  statsSectionsData: SectionItemComponent[];
}

const StatsSection: React.FC<StatsSectionProps> = ({statsSectionsData}) => {
  //console.log("statsSectionsData", statsSectionsData);
  
  return (
    <div className="flex flex-wrap justify-center items-center h-[150px] bg-amber-500">
      {statsSectionsData.map((stat, index) => (
        <div
          key={index}
          className="text-center md:h-[150px] md:w-[130px] h-[80px] w-[60px] md:pt-5 md:mx-16 mx-4"
        >
          <p className="text-slate-800 font-extrabold text-lg md:text-3xl mt-1 md:mt-3">
            {stat.title}
          </p>
          <p className="text-xs md:text-base mt-1">{stat.data}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
