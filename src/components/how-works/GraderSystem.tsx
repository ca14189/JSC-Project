'use client';

import Image from 'next/image';

import YellowStrip from '../../../public/images/yellow_strip.jpg';
interface GraderSystemItemsComponent{
  type: 'text' | 'media';
  data: string;
  name: string;
  media_ref?: string;
  title?: string;
}
// interface GraderSystemItems {
//   contents: GraderSystemItemsComponent[];
// }
interface GraderSystemProps {
  graderSystemData: GraderSystemItemsComponent[];
}

const GraderSystem = ({graderSystemData} :GraderSystemProps) => {
  // console.log("graderSystemData", JSON.stringify(graderSystemData, null, 2));

  const graderSystemHeading =  graderSystemData?.slice(0, 4);
  const graderImage =  graderSystemHeading?.[3]?.media_ref;
  const graderSystemDetails =  graderSystemData?.slice(4);
  const graderSteps = graderSystemDetails?.slice(1);
  
  return (
    <div className="w-full mt-24 px-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-28 px-4 gap-6">
        {/* Grading Section */}
        <div className="w-full md:w-[50%] text-center md:text-left">
          <p className="uppercase headingGlobal text-[#343434] font-extrabold">
            {graderSystemHeading?.[0]?.data} <span className="text-brandlight">{graderSystemHeading?.[1]?.data}</span>
          </p>
          <p className="mt-5 text-base headingGlobal font-light text-grayLight">
            {graderSystemHeading?.[2]?.data}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[30%] flex justify-center">
          {graderImage && (
          <Image
            src={graderImage}
            alt="Grading System"
            width={300}
            height={300}
            className="rounded-lg"
          />
        )}
          
        </div>
      </div>
      {/* Heading */}
      <p className="headingGlobal text-brandlight font-bold text-center mx-auto sm:w-[520px] w-[90%]">
        {graderSystemDetails?.[0]?.data}
      </p>
 {/* Text Section */}
      {/* Container */}
      <div className="relative flex flex-wrap justify-center w-[90%] xl:w-[100%] mx-auto mt-10">

        {/* Yellow Strip (only on XL and above) */}
        <div className="hidden xl:block w-[50%] absolute top-40  z-0">
          <Image
            src={YellowStrip}
            alt="Yellow Strip"
            className="w-[100%]"
            priority
          />
        </div>

        {/* Grader Cards */}
        <div className="relative z-10  border flex flex-wrap justify-center xl:w-[90%] mx-auto">
            {graderSteps?.map((step: GraderSystemItemsComponent, index: number) => (
            <div
              key={index}
              className="bg-[#343434] text-white w-[90%] sm:w-[300px] md:w-[280px] xl:w-[300px] h-auto p-4 rounded-3xl mx-3 mb-10 shadow-lg mr-10"
            >
              <div className="flex items-center border-b-4 border-brandlight
              pb-2">
                <p className="text-6xl font-extrabold text-white mr-4 ml-6">{index+1}</p>
                <p className="text-xl sm:text-2xl uppercase font-bold text-white">
                  {step.title}
                </p>
              </div>
              <p className="text-sm mt-4 px-2 leading-relaxed">{step.data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraderSystem;
