import { log } from 'console';
import Image from 'next/image';
import React from 'react'

interface WhyHireSectionProps {
  whyHireSectionData: { type: string; data: string; name: string, media_ref?: string }[];
}
const WhyHire: React.FC<WhyHireSectionProps> = ({ whyHireSectionData }) => {

  //  console.log("WhyHireSectionData", whyHireSectionData);
  const safeData = whyHireSectionData ?? [];
const cardsData = safeData.slice(1);

// =====old===
  // const cardsData = whyHireSectionData?.slice(1)

  return (
    <div className='my-16'>
      <div className='text-center'>
        <p className='headingGlobal font-extrabold text-zinc-800 tracking-wide'>
          {whyHireSectionData?.[0]?.data}{' '}
        </p>
      </div>
      <div className="grid gap-6 mt-5 p-2 px-4 
                grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                justify-items-center">
        {cardsData &&
          cardsData.map((value, index) => (
            <div
              key={index}
              className="border-2 border-brandorange p-5 w-full h-full rounded-md 
                   flex flex-col justify-between"
            >
              <div>
                <p className="text-md font-bold">
                  {value.name?.split("||")?.[0]}
                </p>
                <p className="md:text-base textBody">
                  {value.name?.split("||")?.[1]}
                </p>
              </div>

              <div className="flex justify-center items-end mt-4">
                <Image
                  src={value?.media_ref ?? ""}
                  alt="Group Talking"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
      </div>


    </div>
  )
}

export default WhyHire;