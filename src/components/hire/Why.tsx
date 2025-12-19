import React from 'react';

interface WhySectionProps {
  whySectionData: { type: string; data: string; name: string; title?: string }[];
}
const Why: React.FC<WhySectionProps> = ({ whySectionData }) => {
  //  console.log("whySectionData ", whySectionData);

  const cardData = whySectionData?.slice(3);
  return (
    <div className='px-5 w-full lg:mt-20 '>
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-28 mt-6 sm:mt-8 lg:mt-10">

        {/* Heading 1 */}
        <p className="headingGlobal  text-brandZinc
  font-extrabold leading-snug">
          {whySectionData?.[0]?.data ?? ''}
        </p>

        {/* Heading 2 */}
        <p className="headingGlobal font-extrabold leading-snug mt-2">
          {whySectionData?.[1]?.data ?? ''}
        </p>

        {/* Paragraph */}
        <p className="mt-3 sm:mt-4 lg:mt-6 textBody text-grayDark text-left">
          {whySectionData?.[2]?.data ?? ''}
        </p>
      </div>

      <div className='flex justify-center'>
        <div className='flex w-[80%] flex-wrap gap-10 justify-center mt-5'>
          {cardData &&
            cardData.map((value, index) => (
              <div
                key={index}
                className='w-full sm:w-[38%] lg:w-[25%] rounded-md border-2 border-brandlightYellow
                 p-4'
              >
                <p className='font-bold lg:text-base xl:text-xl text-sm sm:text-base '>{value.title}</p>
                <p className='lg:text-base xl:text-sm mt-1 sm:mt-1 md:mt-2 lg:mt-5 text-sm sm:text-base textBody'>{value.data}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
