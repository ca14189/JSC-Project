import { log } from 'console';
import React from 'react'

interface FaqSectionProps {
  FaqSectionData: { type: string; data: string; name: string; title?: string }[];
}
const Faq: React.FC<FaqSectionProps> = ({ FaqSectionData }) => {
  const faqData = FaqSectionData?.slice(3)
  return (
    <div>
      <div className="flex flex-wrap w-full mt-10 md:mt-20 md:justify-center">

        <div className='md:mr-[100px]' >
          <div className="w-full md:w-[330px] mt-6">
            <p className="headingGlobal font-extrabold text-brandlight brandZinc tracking-wide">
              {FaqSectionData?.[0]?.data}
            </p>
            <p className="md:mt-4 mt-2 text-sm font-light tracking-tight">
              {FaqSectionData?.[1]?.data}&nbsp;
              <a
                href={FaqSectionData?.[2]?.data}
                className="hover:text-brandlight hover:font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {FaqSectionData?.[2]?.data}
              </a>
            </p>
          </div>
        </div>


        <div className="w-full md:w-[800px] mr-3 mt-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="mx-6 border-b-[4px] border-brandlight pl-2"
            >
              <p className="text-lg md:text-xl font-bold mt-4 text-zinc-700 tracking-wide">
                {faq.title}
              </p>
              <p className="text-sm textBody font-light mt-4 pb-4 tracking-wide">
                {faq.data}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq

