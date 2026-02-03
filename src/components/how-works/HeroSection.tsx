// import { log } from "console";

interface HeroSectionItem {
  type: string;
  data: string;
  name?: string;
  media_ref?: string;
}

interface HeroSectionItems {
  heroSectionData: HeroSectionItem[];
}
const HeroSection = ({heroSectionData} : HeroSectionItems) => {  
  //console.log("heroSectionData", heroSectionData);

  const bannerImage = heroSectionData?.[0]?.media_ref ?? '';
  
  const words = heroSectionData?.[3]?.data.split(" ");
  const title1 =  heroSectionData?.[1]?.data
  const title2 = heroSectionData?.[2]?.data;
  const title3 = words?.[0];
  const title4 = words?.[1];  
  
  
  return (
    <div style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }} className="relative w-full border border-transparent h-[260px] sm:h-[315px] md:h-[420px] lg:h-[525px] xl:h-[630px]">

      {/* Content */}
     <div className="relative z-10 flex w-full">
  {/* LEFT TEXT SECTION */}
  <div
    className="
      w-[55%]
      sm:w-[53%]
      pt-0
      sm:pt-0
      md:pt-0
      lg:pt-[160px]
      xl:pt-[240px]
      ml-[7%]
      sm:ml-[9%]
      text-left
    "
  >
    <p className="headingGlobal xl:text-6xl font-semibold text-grayLight leading-tight">
      {title1}
    </p>

    <p className="headingGlobal xl:text-6xl font-extrabold text-[#343434] leading-tight">
      {title2}
    </p>

    <p className="headingGlobal lg:text-5xl xl:text-6xl font-extrabold mt-3 text-[#343434] leading-tight">
      <span className="bg-[#343434] text-brandlight py-1 px-3 inline-block">
        {title3}
      </span>{" "}
      {title4}
    </p>
  </div>

  {/* RIGHT IMAGE SECTION (example) */}
  {/* Your image/illustration container stays here */}
</div>

    </div>
  );
};

export default HeroSection;
