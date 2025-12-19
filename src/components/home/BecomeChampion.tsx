// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';

// interface BecomeChampionProps {
//   becomeChampion:{type:string , data:string , media_ref?:string}[]
// }
// const BecomeChampion = ({ becomeChampion }: BecomeChampionProps) => {
// //  console.log('BecomeChampion Data:', becomeChampion);
//   const title = becomeChampion[0]?.data?.slice(0, 9);
//   const secondTitle = becomeChampion[0]?.data?.slice(9, 30);
//   const bannerImg = becomeChampion[1]?.media_ref;
//   const paagraph = becomeChampion[2]?.data;

//   return (
//     <div className="w-[90%] sm:w-[85%] md:w-[83%] lg:w-[75%] mx-auto lg:ml-auto lg:mx-0 mt-10 text-center lg:text-left">
//       <p className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
//         {title}{' '}
//         <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-amber-500 mt-2 block">
//           {secondTitle}
//         </span>
//       </p>

//       <div className="mt-8 h-auto flex justify-center lg:justify-start">
//         {bannerImg && (
//           <Image
//             src={bannerImg}
//             alt="Become a JS Champion"
//             width={600}
//             height={400}
//             className="w-[75%] sm:w-[75%] md:w-[600px] lg:w-[65%] border border-transparent rounded-2xl"
//           />
//         )}
//       </div>

//       <p className="w-[90%] sm:w-[85%] mx-auto lg:mx-0 mt-5 text-sm sm:text-base md:text-lg lg:text-xl tracking-tight text-center lg:text-left">
//         {paagraph}
//       </p>

//       <div className="mt-3 sm:mt-5 flex justify-center lg:justify-start">
//         <Link href='/fullstack-development-learning'>
//         <button className="hover:shadow-xl bg-amber-500 border border-transparent rounded-lg px-1 sm:px-2 py-1 sm:py-[4px] text-lg sm:text-2xl font-bold hover:bg-amber-700 cursor-pointer">
//           Get trained
//         </button>
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default BecomeChampion;









'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface BecomeChampionProps {
  becomeChampion: { type: string; data: string; media_ref?: string }[];
}

const BecomeChampion = ({ becomeChampion }: BecomeChampionProps) => {
  const fullTitle = becomeChampion[0]?.data ?? '';
  // Large screen heading slices
  const title = fullTitle.slice(0, 9);
  const secondTitle = fullTitle.slice(9, 30);

  // Small screen heading split (like Banner style)
  const titleWords = fullTitle.trim().split(' ');
  const highlight = titleWords.pop() || '';
  const headlines = titleWords.join(' ');

  const bannerImg = becomeChampion[1]?.media_ref;
  const paragraph = becomeChampion[2]?.data ?? '';

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 640);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div
      className={`mx-auto mt-10 ${isSmallScreen
          ? 'w-[90%] text-center px-4'
          : 'w-[90%] sm:w-[85%] md:w-[83%] lg:w-[75%] mx-auto text-center px-4'
        }`}
    >
      {/* Heading */}
      {isSmallScreen ? (
        <p
          className="headingSecond"
        >
          {headlines} <br className="block sm:hidden" />
          <span className="text-grayLight">{highlight}</span>
        </p>
      ) : (
        <p className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl mx-auto">
          {title}{' '}
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-brandlight mt-2 block">
            {secondTitle}
          </span>
        </p>
      )}

      {/* Image - hide on small screens */}
      {!isSmallScreen && bannerImg && (
        <div className="mt-8 h-auto flex justify-center">
          <Image
            src={bannerImg}
            alt="Become a JS Champion"
            width={600}
            height={400}
            className="w-[75%] sm:w-[75%] md:w-[600px] lg:w-[65%] border border-transparent rounded-2xl"
          />
        </div>
      )}

      {/* Paragraph */}
      <p
        className={`mt-5 text-xs sm:text-sm md:text-base lg:text-lg tracking-tight max-w-xl mx-auto`}
      >
        {paragraph}
      </p>

      {/* Button */}
      <div className="mt-3 sm:mt-5 flex justify-center">
        <Link href="/fullstack-development-learning">
          <button className="btn btn-lg btn-bold font-bold">
            I Want to Learn
          </button>
        </Link>
      </div>

    </div>
  );
};

export default BecomeChampion;
