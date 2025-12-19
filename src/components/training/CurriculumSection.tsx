import Image from "next/image";
import React from "react";

interface CurriculumSectionData {
  type: string;
  data: string;
  name: string;
  media_ref?: string;
  Title?: string;
}

interface CurriculumSectionProps {
  curriculumSectionData: CurriculumSectionData[];
}
const CurriculumSection: React.FC<CurriculumSectionProps> = ({curriculumSectionData}) => {
  // console.log("curriculumSectionData", curriculumSectionData);

  const curriculumPoster = curriculumSectionData?.[0]?.media_ref
  
  return (
    <div>
      <div className="md:flex md:mt-32 mt-20 justify-between">
        <div className="md:ml-40 ml-10">
          {curriculumPoster && (
          <Image
            src={curriculumPoster}
            alt="Group Talking"
            className="h-auto w-full"
            width={500}
            height={500}
            // placeholder="blur"
          />
        )}
          
        </div>
        <div className="md:w-[650px] h-[320px] md:mr-40">
          <p className="headingGlobal font-bold mb-3 mt-8 text-center mx-2 md:mx-0">
            <span className="text-amber-500 headingGlobal font-extrabold">
              {curriculumSectionData?.[1]?.data}
            </span>{" "}
            {curriculumSectionData?.[2]?.data}
          </p>
          <p className="textBody font-bold text-center mx-2 md:mx-0">
            {curriculumSectionData?.[3]?.data}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
