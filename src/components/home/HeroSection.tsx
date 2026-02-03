// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';

// interface HeroSectionComponent {
//   name: string;
//   type: 'text' | 'media';
//   data: string;
//   media_ref?: string; 
// }
// interface HeroSectionItem {
//   heroSectionData: HeroSectionComponent[];
// }

// const HeroSection = ({heroSectionData} :HeroSectionItem) => {
//   const title = heroSectionData[0]?.data.slice(0,14)
//   const secondTitle = heroSectionData[0]?.data.slice(14,35)
//   const bannerImg = heroSectionData[1]?.media_ref
//   const paragraph = heroSectionData[2]?.data  

//   return (
//     <div className="mt-7 sm:mt-14 md:mt-28 border-[1px] border-transparent">
//       <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#343434] font-extrabold w-[60%] xl:w-[55%] mx-auto text-center">
//         {title} <span className="text-amber-500">{secondTitle}</span>
//       </p>

//       <div className="mx-auto mt-[13px] w-[60%]">
//         {bannerImg && (
//           <Image
//             src={bannerImg}
//             alt="groupImage"
//             width={800}
//             height={500}
//             className="w-full h-auto"
//           />
//         )}
//       </div>

//       <p className="text-[#343434] font-bold w-[70%] xl:w-[60%] mx-auto text-center text-sm sm:text-base md:text-lg lg:text-xl mt-1 sm:mt-2 md:mt-4 lg:mt-6 xl:mt-10">
//         {paragraph}
//       </p>
//       <Link href='/hire-fullstack-developer'>
//         <button className="block bg-amber-500 text-base sm:text-lg md:text-xl lg:text-2xl font-bold rounded-lg mx-auto mt-1 sm:mt-3 md:mt-5 lg:mt-6 xl:mt-8 px-1 sm:px-2 md:px-4 py-1 md:py-2 hover:bg-amber-700 hover:shadow-xl hover:transition-all hover:delay-75 cursor-pointer">
//           Hire JavaScript Talents Now
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default HeroSection;


'use client';

import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionComponent {
  name: string;
  type: 'text' | 'media';
  data: string;
  media_ref?: string;
}
interface HeroSectionItem {
  heroSectionData: HeroSectionComponent[];
}

const HeroSection = ({ heroSectionData }: HeroSectionItem) => {
  const fullTitle = heroSectionData[0]?.data ?? '';
  const bannerImg = heroSectionData[1]?.media_ref;
  const paragraph = heroSectionData[2]?.data ?? '';

  // ⭐ Highlight logic (last 2 words color)
  const words = fullTitle.trim().split(" ");
  const highlightWords = words.slice(-2).join(" ");
  const normalWords = words.slice(0, -2).join(" ");

  return (
    <div className="mt-7 sm:mt-12 md:mt-20 border-[1px] border-transparent px-4 sm:px-6 md:px-8 lg:px-0">
      {/* ⭐ Full title with highlight — NO slicing */}
      <p className="headingMain text-center">
        {normalWords}{" "}
        <span className="headingHighlight">
          {highlightWords}
        </span>
      </p>

      {/* Image */}
      {bannerImg && (
        <div className="mx-auto mt-6 sm:mt-8 md:mt-10 w-full max-w-4xl">
          <Image
            src={bannerImg}
            alt="groupImage"
            width={800}
            height={500}
            className="w-full h-auto rounded-md"
            priority={true}
          />
        </div>
      )}

      {/* Paragraph */}
      {/* <p className="
        text-[#343434] font-bold text-center w-full max-w-3xl mx-auto
        mt-4 sm:mt-5 md:mt-6 lg:mt-8
        text-sm sm:text-base md:text-lg lg:text-xl
        px-2 sm:px-0
      ">
        {paragraph}
      </p> */}
      {/* change the style of class from bold to normal */}
      <p className="
        text-[#343434] font-normal text-center w-full max-w-3xl mx-auto
        mt-4 sm:mt-5 md:mt-6 lg:mt-8
        text-sm sm:text-base md:text-lg lg:text-xl
        px-2 sm:px-0
      ">
        {paragraph}
      </p>

      {/* Button */}
      <div className="flex justify-center mt-5 sm:mt-6 md:mt-8">
        <Link href="/hire-fullstack-developer">
          <button className="btn btn-lg btn-bold font-bold">
            I Want to Hire
          </button>
        </Link>
      </div>

    </div>
  );
};

export default HeroSection;