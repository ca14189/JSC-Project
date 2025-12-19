'use client';
interface BannerProps {
  headerData:{type:string , data:string,media_ref?:string }[]
}

const Banner = ({ headerData }:BannerProps) => {
  //console.log("BannerData",headerData);
  
  const bannerImg = headerData?.[3]?.media_ref?.trim() ?? '';
  

  return (
    <div
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '',
      }}
      className="w-full h-[280px] sm:h-[400px] md:h-[420px] lg:h-[500px] xl:h-[610px] flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl lg:max-w-4xl xl:max-w-[860px] xl:mx-28">
          <p className=" headingGlobal lg:text-[40px]  text-white font-extrabold xl:my-2">
            {headerData?.[0]?.data ?? ''} 
          </p>
          <p className=" lg:text-[40px] headingGlobal text-white  font-extrabold xl:my-2">
            {headerData?.[1]?.data ?? ''} 
          </p>

          <p className=" text-white lg:text-base xl:text-lg font-extralight mt-1 sm:mt-1 md:mt-2 lg:mt-5 max-w-xl">
           {headerData?.[2]?.data ?? ''} 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
