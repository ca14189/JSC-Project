import Image from 'next/image';
interface HowItWorksItem {
  type: string;
  data: string;
  name?: string;
  media_ref?: string;
}

interface HowItWorksItems {
  howItWorkData: HowItWorksItem[];
}

const HowItWorks = ({ howItWorkData }: HowItWorksItems) => {

  const Imgbanner = howItWorkData?.[4]?.media_ref;
  const Imgbanner2 = howItWorkData?.[7]?.media_ref;


  return (
    <section className="w-full">
      {/* Heading */}
      <p className="bg-brandlight text-grayLight px-2 py-1 headingGlobal font-bold w-fit mx-auto mt-3 sm:mt-[20px] xl:mt-[80px]">
        {howItWorkData?.[0]?.data}
      </p>

      {/* Main Section */}
      <div className="flex flex-wrap w-[93%] justify-center relative h-auto mt-3 sm:mt-5 md:mt-8 lg:mt-[2%] xl:mt-[5%] ml-4 md:ml-5 lg:ml-auto">
        {/* Left Content */}
        <div className="mr-4 max-w-xl">
          <p className="headingGlobal font-extrabold mt-8 mr-[0.5%]">
            {howItWorkData?.[1]?.data}
          </p>

          <button className="text-2xl sm:text-3xl md:text-4xl font-bold bg-brandlight text-[#343434] py-2 px-2 mt-4">
            {howItWorkData?.[2]?.data}
          </button>

          <p className="text-base textBody md:text-lg mt-4">
            {howItWorkData?.[3]?.data}
          </p>

          <div className="mt-6 hidden md:block w-[290px]">
            {Imgbanner && (
              <Image
                src={Imgbanner}
                alt="5K+ Students"
                width={290}
                height={100}
                className="w-full h-auto"
              />
            )}
          </div>
        </div>

        {/* Right Main Image - Now visible on all screen sizes */}
        <div className="block w-full sm:w-3/4 md:w-1/2 lg:w-1/2 h-auto mx-auto lg:ml-auto mt-6 sm:mt-8">
          {Imgbanner2 && (
            <Image
              src={Imgbanner2}
              alt="Main Visual"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          )}

        </div>

        {/* Floating Box */}
        <div className="w-[400px] bg-brandlight h-auto rounded-3xl px-3 py-2 mt-16 md:absolute right-0 sm:bottom-0 md:bottom-1 lg:bottom-7 xl:bottom-10 md:left-[330px] xl:left-[500px]">
          <p className="text-grayLight border-b border-grayLight text-2xl sm:text-3xl font-bold text-center">
            {howItWorkData?.[5]?.data}
          </p>
          <p className="text-grayLight text-center text-sm textBody font-semibold tracking-tight mt-2 p-5">
            {howItWorkData?.[6]?.data}
          </p>
        </div>
      </div>
      <div className="mt-14 px-4">
        <p className="w-[65%] mx-auto text-center textBody text-lg font-light">
          {howItWorkData?.[8]?.data}
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
