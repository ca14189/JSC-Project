'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
interface FaqSectionData {
  type: string;
  data: string;
  name: string;
  media_ref?: string;
  title?: string;
}

interface FaqSectionProps {
  faqSectionData: FaqSectionData[];
}

const FaqSection: React.FC<FaqSectionProps> = ({faqSectionData}) => {
 

  const faqPoster = faqSectionData?.[0]?.media_ref;
  const faqData = faqSectionData?.slice(6,11) ?? []
  
  return (
    <div className="w-full">
      {/* Background Banner Section */}
      <div className="relative w-full h-[455px] mt-10 md:mt-28">
        {/* Background Image */}
        {faqPoster && (
          <Image
          src={faqPoster}
          alt="Background"
          // fill
          width={1500}
          height={500}
          className="object-cover h-auto w-[500]"
          priority
        />
        )}
        

        {/* Content Positioned Within Black Area */}
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-14 z-10">
          <p className="text-amber-500 md:ml-60 font-extrabold headingGlobal w-[300px] md:w-[600px] leading-snug">
            {faqSectionData?.[1]?.data}<br className="hidden md:block" />{faqSectionData?.[2]?.data}
          </p>
          <Link href='/software-development-learning-kushinagar'>
          <button className="mt-4 md:ml-60 bg-amber-500 px-6 py-2 text-lg md:text-2xl font-extrabold rounded-xl text-zinc-700 hover:bg-amber-600">
            Contact Us
          </button>
          </Link>
        </div>
      </div>





      {/* FAQ Section */}
      <div className="flex flex-wrap w-full mt-10 md:mt-20">
        {/* Title & Subtext */}
        <div className="w-full md:w-[330px] md:ml-[160px] ml-10 mt-6">
          <p className="headingGlobal font-extrabold text-zinc-800 tracking-wide">
            {faqSectionData?.[3]?.data}
          </p>
          <p className="md:mt-4 mt-2 textBody text-sm font-light tracking-tight">
            {faqSectionData?.[4]?.data}&nbsp;
            <a
              href={faqSectionData?.[5]?.data}
              className="hover:text-amber-500 hover:font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {faqSectionData?.[5]?.data}
            </a>
          </p>
        </div>

        {/* FAQ List */}
        <div className="w-full md:w-[800px] md:ml-[120px] ml-2 mr-3 mt-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="ml-7 border-b-[4px] border-amber-500 pl-2"
            >
              <p className="text-lg md:text-xl font-bold mt-4 text-zinc-700 tracking-wide">
                {faq.title}
              </p>
              <p className="text-sm  textBody font-light mt-4 pb-4 tracking-wide">
                {faq.data}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
