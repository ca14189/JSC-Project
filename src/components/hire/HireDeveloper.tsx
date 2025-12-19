import Image from 'next/image';
import React from 'react';


interface HireDeveloperSectionProps {
  HireDeveloperSectionData: { type: string; data: string; name: string, media_ref?: string }[];
}
const HireDeveloper: React.FC<HireDeveloperSectionProps> = ({
  HireDeveloperSectionData,
}) => {
//  console.log("HireDEV ::::>",HireDeveloperSectionData);
  
  const cardData = HireDeveloperSectionData?.slice(3, 7);
  const poster = HireDeveloperSectionData?.[7].media_ref;


  return (
    <div className='px-5'>
      <div className='max-w-3xl lg:max-w-4xl xl:max-w-[100%] xl:mx-28 my-16'>
        <p className='uppercase headingGlobal text-grayDark font-extrabold'>
          {HireDeveloperSectionData?.[0]?.data}{' '}
          <span className='text-brandlight'>
            {HireDeveloperSectionData?.[1]?.data}
          </span>
        </p>

        <p className='w-[100%] textBody mt-1 sm:mt-1 md:mt-2 lg:mt-5 sm:text-base mx-2 text-gray-900 md:mx-0 text-left'>
          {HireDeveloperSectionData?.[2]?.data ?? ''}
        </p>
      </div>
      <div className='flex md:flex-row xl:flex-row flex-col justify-center'>
        <div className='xl:w-[30%] lg:w-[30%] flex flex-col gap-3 xl:py-20 md:py-16'>
          {cardData &&
            cardData.map((value, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div
                  className={`xl:w-[45%] md:w-[60%] w-[100%] p-4 mx-20 rounded-xl ${
                    index === 0 ? 'bg-yellow-400' : 'bg-zinc-700'
                  }`}
                >
                  <div className='flex gap-2'>
                    <p className='text-5xl font-bold text-white'>
                      {value.name}
                    </p>
                    <p className='text-white '>{value.data}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div
          className='mt-10 hidden lg:block relative w-[50%] lg:h-[500px] md:h-[450px] sm:h-[400px] h-[300px]'
          style={{ zIndex: 0 }}
        >
          {/* Inner image */}
          {poster && (
            <Image
              src={poster}
              alt='Group Talking'
              width={500}
              height={300}
              className='absolute top-0 left-0 w-full h-full object-contain z-0'
            />
          )}

          <div className='absolute top-0 left-0 w-full h-full z-10 pointer-events-none border-[2px] border-yellow-500 -rotate-3'></div>
        </div>
      </div>
    </div>
  );
};

export default HireDeveloper;
