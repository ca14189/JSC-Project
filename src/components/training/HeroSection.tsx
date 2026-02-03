import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionItemsComponent {
  type: string;
  data: string;
  media_ref?: string;
  name: string;
}

interface HeroSectionItems {
  heroSectionData: HeroSectionItemsComponent[];
}

const HeroSection = ({ heroSectionData }: HeroSectionItems) => {
  // console.log("heroSectionData", heroSectionData);
  const bannerImage = heroSectionData?.[0]?.media_ref
  const posterImage = heroSectionData?.[5]?.media_ref;
  return (
    <div
      className="relative flex flex-col-reverse md:flex-row items-center min-h-[530px] px-6 md:px-28 py-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bannerImage})`
      }}
    >
      {/* Optional overlay */}
      
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full md:w-[900px] ">
        <p className="text-white font-bold text-lg md:text-2xl">
          {heroSectionData?.[1]?.data}
        </p>
        <p className="text-amber-500 font-extrabold leading-tight headingGlobal mt-2">
          {heroSectionData?.[2]?.data}
        </p>    
        {/* change the claas name to maintain the gap between text */}
        <p className="text-white textBody mt-4 text-left tracking-normal">    
          {heroSectionData?.[3]?.data}
        </p>
        <Link href='/learner-login'>
          <button className="btn btn-md btn-bold mt-7">
            {heroSectionData?.[4]?.data}
          </button>

        </Link>
      </div>

      {/* Right Image */}
      <div className="relative z-10 w-full md:w-auto  mb-8 md:mb-0 flex justify-center md:justify-end md:pl-6">
        {posterImage && (
          <div className="relative w-[300px] h-[250px] md:w-[500px] md:h-[400px]">
            <Image
              src={posterImage}
              alt="Hero Illustration"
              fill
              sizes="(max-width: 768px) 300px, 500px"
              className="object-contain"
              priority
            />
          </div>

        )}
      </div>

    </div>
  );
};

export default HeroSection;
