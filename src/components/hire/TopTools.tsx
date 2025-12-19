import Image from 'next/image';
import React from 'react';
interface TopToolsSectionProps {
  topToolsSectionData: { type: string; data: string; name: string , media_ref?: string}[];
}
const TopTools: React.FC<TopToolsSectionProps> = ({ topToolsSectionData }) => {
  // console.log("topToolsSectionData", topToolsSectionData);

  const Images = topToolsSectionData?.slice(2);
  return (
    <div>
      <div className='max-w-3xl lg:max-w-4xl xl:max-w-[100%] xl:mx-28 mt-10 text-center'>
        <p className='headingGlobal lg:text-[40px]  text-brandZinc  font-extrabold xl:my-2'>
          {topToolsSectionData?.[0]?.data ?? ''}
        </p>
        <p className='headingGlobal lg:text-[40px]  font-extrabold xl:my-2'>
          {topToolsSectionData?.[1]?.data ?? ''}
        </p>
      </div>
      <div className='flex justify-center'>
        <div
  className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-6 w-[80%] mt-5 mx-auto justify-items-center items-center"
>
  {Images &&
    Images.map((value, index) => (
      <div
        key={index}
        className="p-1 flex flex-col items-center justify-center border-2 w-[50%] border-brandZinc
        rounded-md"
      >
        <Image
          src={value?.media_ref ?? ""}
          alt="Group Talking"
          width={30}
          height={30}
          className="object-contain rounded-sm"
        />
      </div>
    ))}
</div>

      </div>
    </div>
  );
};

export default TopTools;
