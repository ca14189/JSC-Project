// 'use client';
// interface BannerProps {
//   headerData:{type:string , data:string , media_ref?:string}[]
// }

// const Banner = ({ headerData }:BannerProps) => {
//   //console.log('Header Data:', headerData);

//   const rawTitle = headerData[0]?.data?.trim() ?? '';
//   const subText = headerData[1]?.data ?? '';
//   const bannerImg = headerData[2]?.media_ref ?? '';
//  // console.log('Banner Image:', rawTitle, subText, bannerImg);

//   const titleWords = rawTitle.split(' ');
//   const highlight = titleWords.pop() || '';
//   const headlines = titleWords.join(' ');

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bannerImg})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'contain',
//       }}
//       className="w-full h-[280px] sm:h-[400px] md:h-[420px] lg:h-[500px] xl:h-[610px] flex items-center"
//     >
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl lg:max-w-4xl xl:max-w-[860px]">
//           <p className="text-sm sm:text-lg md:text-3xl lg:text-[40px] xl:text-5xl text-amber-500 uppercase font-extrabold pt-3 sm:pt-10 md:pt-16 lg:pt-14 break-words whitespace-normal leading-snug max-w-xs sm:max-w-xl lg:max-w-5xl text-left ">
//             {headlines} <br className="block sm:hidden" /><span className="text-gray-800">{highlight}</span>
//           </p>

//           <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-extralight mt-20 sm:mt-1 md:mt-2 lg:mt-5 max-w-xl">
//             {subText}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

'use client';
import { useEffect, useState } from 'react';

interface BannerProps {
  headerData: { type: string; data: string; media_ref?: string }[];
}

const Banner = ({ headerData }: BannerProps) => {
  const rawTitle = headerData[0]?.data?.trim() ?? '';
  const subText = headerData[1]?.data ?? '';
  const bannerImg = headerData[2]?.media_ref ?? '';

  const titleWords = rawTitle.split(' ');
  const highlight = titleWords.pop() || '';
  const headlines = titleWords.join(' ');
  const [screenSize, setScreenSize] = useState<'small' | 'medium' | 'large'>('large');

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('small');
      else if (width >= 640 && width < 1024) setScreenSize('medium');
      else setScreenSize('large');
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const backgroundStyle =
    screenSize === 'large'
      ? {
        backgroundImage: `url(${bannerImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '30%',
        backgroundPosition: 'right 8% center',
      }
      : {
        backgroundImage: 'none',
        backgroundColor: 'rgba(252, 211, 77, 0.3)',
      };



  return (
    <div
      style={{ ...backgroundStyle, position: 'relative' }}
      className="relative w-full h-[280px] sm:h-[400px] md:h-[420px] lg:h-[500px] xl:h-[610px] flex items-center"
    >
      {screenSize !== 'large' && (
        <div className="absolute inset-0 bg-orangeLight opacity-80" style={{ zIndex: 0 }}></div>
      )}

      <div
        className="relative z-10 px-4 sm:px-6 md:px-10 w-full"
        // style={{
        //   maxWidth: screenSize === 'medium' ? '720px' : screenSize === 'large' ? '100%' : '100%',
        //   marginLeft: screenSize === 'medium' || screenSize === 'small' ? 'auto' : 0,
        //   marginRight: screenSize === 'medium' || screenSize === 'small' ? 'auto' : 0,
        //   textAlign: screenSize === 'small' ? 'center' : 'left', // small centered, md/lg left aligned
        // }}

        // ===change==
        style={{
          maxWidth: screenSize === 'medium' ? '720px' : '100%',
          marginLeft: screenSize === 'medium' || screenSize === 'small' ? 'auto' : 0,
          marginRight: screenSize === 'medium' || screenSize === 'small' ? 'auto' : 0,
          textAlign: screenSize === 'small' ? 'center' : 'left',
        }}

      >
        <div className="max-w-5xl ">
          {(screenSize === 'small' || screenSize === 'medium') ? (
            <p
              className={`text-brandlight uppercase font-extrabold break-words whitespace-normal leading-snug pt-3 sm:pt-10 md:pt-16 lg:pt-14 max-w-full ${screenSize === 'small'
                ? 'text-base sm:text-xl md:text-3xl lg:text-[40px] xl:text-5xl mx-auto'
                : 'text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'
                }`}
            >
              {headlines} <br className="block sm:hidden" />
              <span className="text-grayDark  ">{highlight}</span>
            </p>
          ) : (
            <>
              <p
                className="text-brandlight uppercase font-extrabold break-words whitespace-normal leading-snug pt-3 sm:pt-10 md:pt-16 lg:pt-14 text-[40px] xl:text-5xl text-left"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  maxWidth: '800px',
                }}
              >
                {headlines}
              </p>
              <p
                className="text-grayDark uppercase font-extrabold pt-0 text-[40px] xl:text-5xl  text-left"
                style={{ maxWidth: '800px' }}
              >
                {highlight}
              </p>
            </>
          )}

          <p
            className={`text-grayLight mt-5 sm:mt-3 md:mt-4 lg:mt-5 max-w-full ${screenSize === 'small'
              ? 'text-md sm:text-sm md:text-base mx-auto text-justify'
              : screenSize === 'medium'
                ? 'text-sm sm:text-base md:text-lg text-justify'
                : 'text-lg max-w-xl text-justify'
              }`}
          >
            {subText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
