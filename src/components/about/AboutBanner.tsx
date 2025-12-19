'use client';
import Image from 'next/image';
import React from 'react';

interface ContentItem {
  type: 'text' | 'media';
  data?: string;
  media_ref?: string;
  title: string;
}

interface AboutBannerProps {
  headerData?: ContentItem[];
  groupDiscussion?: ContentItem[];
  getTrain?: ContentItem[];
  productDevelopment?: ContentItem[];
  mentorship?: ContentItem[];
  learning?: ContentItem[];
}

const AboutBanner: React.FC<AboutBannerProps> = ({
  headerData = [],
  groupDiscussion = [],
  getTrain = [],
  productDevelopment = [],
  mentorship = [],
  learning = [],
}) => {
  const getTrainTitles = getTrain
    .slice(0, 3)
    .map(item => item.data?.trim())
    .filter(Boolean)
    .join(' ');
  const getTrainDesc = getTrain[3]?.data || '';
  const getTrainImage = getTrain.find(item => item.type === 'media')?.media_ref;

  const productDevTitles = productDevelopment.slice(0, 3).map(item => item.data).join(' ');
  const productDevDesc = productDevelopment[3]?.data || '';
  const productDevImage = productDevelopment.find(item => item.type === 'media')?.media_ref;

  const mentorshipDesc = mentorship.filter(item => item.type === 'text').map(i => i.data);
  const mentorshipImage = mentorship.find(item => item.type === 'media')?.media_ref;
  const learningTitle = learning[0]?.title || 'Customized Learning Paths';
  const learningDesc = learning.filter(item => item.type === 'text').map(i => i.data);
  const learningImage = learning.find(item => item.type === 'media')?.media_ref;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        {headerData.map((item, idx) =>
          item.type === 'media' && item.media_ref ? (
            <Image
              key={idx}
              src={item.media_ref}
              alt={`header-image-${idx}`}
              fill
              priority
              className="object-cover"
            />
          ) : null
        )}
        <div className="absolute inset-0 bg-black/60 z-10 flex flex-col justify-center items-center text-center px-4">
          {headerData.map((item, idx) =>
            item.type === 'text' ? (
              <p
                key={idx}
                className={`text-white ${idx === 0
                  ? 'md:text-[46px] font-bold sm:text-[20px] textBody'
                  : 'md:text-xl sm:text-xs mt-4 md:mt-8 w-[80%] '
                  }`}
              >
                {item.data}
              </p>
            ) : null
          )}
        </div>
      </div>
      {/* Mentorship Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-20 px-4 max-w-screen-xl mx-auto space-y-10 md:space-y-0 md:space-x-20">
        {/* Text Section */}
        <div className="flex-1 md:max-w-[650px] p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
          {mentorshipDesc.length > 0 && (
            <>
              <h2 className="font-bold headingGlobal mb-4 text-center md:text-left">
                {mentorshipDesc[0]}
              </h2>

              <p className="textBody mb-4">{mentorshipDesc[1]}</p>
              <p className="textBody mb-4">{mentorshipDesc[2]}</p>

              <h2 className="headingGlobal mb-4">{mentorshipDesc[3]}</h2>
              <p className="textBody">{mentorshipDesc[4]}</p>

              <ul className="list-disc ml-6 mb-4 textBody">
                {mentorshipDesc.slice(5, 8).map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <p className="textBody font-bold">{mentorshipDesc[8]}</p>
            </>
          )}
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center max-w-[600px] md:mx-0 order-1 md:order-2 relative">
          <div className="absolute inset-0 w-full h-full border-4 border-brandlight -rotate-3 rounded-lg pointer-events-none z-0 md:w-[100%] md:h-auto" />
          <Image
            src={mentorshipImage || '/fallback.jpg'}
            alt="Mentorship Image"
            width={500}
            height={500}
            className="relative z-10 rounded-lg w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Customized Learning Paths Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-20 px-4 max-w-screen-xl mx-auto space-y-10 md:space-y-0 md:space-x-20">
        {/* Image */}
        <div className="flex-1 flex justify-center items-center max-w-[600px] md:mx-0 order-1 md:order-1 relative">
          <div className="absolute inset-0 w-full h-full border-4 border-brandlight -rotate-3 rounded-lg pointer-events-none z-0 md:w-[100%] md:h-auto" />
          <Image
            src={learningImage || '/fallback.jpg'}
            alt={learningTitle || "Customized Learning Paths Image"}
            width={500}
            height={500}
            className="relative z-10 rounded-lg w-full h-auto object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex-1 md:max-w-[650px] p-6 md:p-10 flex flex-col justify-center order-2 md:order-2">
          {learningDesc.length > 0 && (
            <>
              <h2 className="font-bold headingGlobal mb-4 text-center md:text-left">
                {learningDesc[0]}
              </h2>

              {learningDesc.slice(1).map((para, idx) => (
                <p key={idx} className="textBody mb-4">
                  {para}
                </p>
              ))}
            </>
          )}
        </div>
      </div>


      {/* Group Discussion Section */}
      <div className="w-full mt-20">
        <div className="flex flex-col md:flex-row md:h-[460px] sm:h-auto">
          {/* Text */}
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start md:pl-20 p-4 order-2 md:order-1 flex-col">
            {groupDiscussion.map(
              (item, idx) =>
                item.type === 'text' && (
                  <React.Fragment key={idx}>
                    <p className="headingGlobal w-[90%] md:w-[85%] text-justify font-bold mb-4">
                      {item.title}
                    </p>

                    <p className=" textBody w-[90%] md:w-[85%] text-justify">
                      {item.data}
                    </p>
                  </React.Fragment>
                )
            )}
          </div>

          {/* Image */}
          <div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[460px] mb-6 sm:mb-0 order-1 md:order-2 flex justify-center items-center">
            {groupDiscussion.map(
              (item, idx) =>
                item.type === 'media' && item.media_ref && (
                  <Image
                    key={idx}
                    src={item.media_ref}
                    alt={`group-discussion-${idx}`}
                    fill
                    priority
                    className="object-cover rounded-lg"
                  />
                )
            )}
            <div className="absolute inset-0 rounded-lg border-4 border-brandlight -rotate-3 scale-95 origin-center z-20 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Training Section */}
      <div className="flex flex-col md:flex-row justify-around items-stretch mt-20">
        <div className="flex-1 flex justify-center items-center m-4 relative md:-ml-10 order-1">
          {getTrainImage && (
            <>
              <div className="absolute w-[90%] max-w-[520px] aspect-square -rotate-3 border-4 border-brandlight rounded-lg pointer-events-none" />
              <Image
                src={getTrainImage}
                alt="Training Image"
                width={500}
                height={500}
                className="relative z-10 rounded-lg max-w-[500px] w-[90%] h-auto"
              />
            </>
          )}
        </div>

        <div className="flex-1 md:max-w-[650px] p-6 md:p-20 flex flex-col justify-evenly md:ml-10 order-2">
          <div className="w-full">
            <div className="font-bold headingGlobal mb-4  md:text-justify">
              {getTrainTitles}
            </div>
            <p className="textBody">
              {getTrainDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-20 px-4 max-w-screen-xl mx-auto space-y-10 md:space-y-0 md:space-x-20">
        <div className="flex-1 md:max-w-[650px] p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
          <div className="w-full">
            <div className="font-bold headingGlobal mb-4 text-center md:text-left">
              {productDevTitles}
            </div>
            <p className="textBody">
              {productDevDesc}
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center max-w-[600px] md:mx-0 order-1 md:order-2 relative">
          {productDevImage && (
            <>
              <div className="absolute inset-0 w-full h-full border-4 border-brandlight -rotate-3 rounded-lg pointer-events-none z-0 md:w-[100%] md:h-auto" />
              <Image
                src={productDevImage}
                alt="Product Development Image"
                width={500}
                height={500}
                className="relative z-10 rounded-lg w-full h-auto object-contain"
              />
            </>
          )}
        </div>

      </div>


    </div>
  );
};

export default AboutBanner;
