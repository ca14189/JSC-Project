'use client';
import Image from 'next/image';
import React from 'react';

import bannerImg from '../../../public/images/computerBorder.png';
import Link from 'next/link';

interface HireSectionProps {
  hireSectionData: { type: string; data: string; name: string, media_ref?: string }[];
}

const Hire: React.FC<HireSectionProps> = ({ hireSectionData }) => {
  //console.log("HireData",hireSectionData);

  const hirePoster = hireSectionData?.[0]?.media_ref;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-4 sm:px-8 lg:px-16 xl:px-32 py-8">

      {/* Image Section */}
      <div
        className="relative w-full max-w-[500px] aspect-[4/3] flex-shrink-0 mx-auto lg:mx-0"
        style={{ zIndex: 0 }}
      >
        {hirePoster && (
          <Image
            src={hirePoster}
            alt="Group Talking"
            fill
            className="object-contain z-0"
            priority
          />
        )}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage: `url(${bannerImg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center lg:text-left space-y-3 sm:space-y-4">
        <p className="text-brandZinc headingGlobal font-extrabold">
          {hireSectionData?.[1]?.data}
        </p>
        <p className="headingGlobal font-bold">
          {hireSectionData?.[2]?.data}
        </p>
        <p className="textBody ">
          {hireSectionData?.[3]?.data}
        </p>
        <div className="flex justify-center mt-5 sm:mt-6 md:mt-8">
          <Link href="/recruiter-login">
            <button className="btn btn-lg btn-bold font-bold"
            >
              I Want to Hire
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hire;
