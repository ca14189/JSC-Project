import Image from 'next/image';
interface MentorshipSectionItemsComponent {
  type: string;
  data: string;
  name?: string;
  media_ref?: string;
}

interface MentorshipSectionItems {
  mentorshipSectionData: MentorshipSectionItemsComponent[];
}
const MentorshipSection = ({mentorshipSectionData} :MentorshipSectionItems) => {
  //console.log("mentorshipSectionData", mentorshipSectionData);

  const image1 = mentorshipSectionData?.[1]?.media_ref;
  const imag2 = mentorshipSectionData?.[0]?.media_ref;

  return (
    <section className="w-full">
  {/* Mentorship Details */}
  <div className="mt-[40px] w-full">

    {/*  Background div only for lg and above */}
    <div
      className="hidden lg:block relative w-[88%] ml-[30px] lg:ml-[100px] xl:ml-auto 
                 border border-transparent md:h-[660px]"
      style={{
        backgroundImage: imag2 ? `url(${imag2})` : undefined,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      {/* Large screen content goes here */}
      <div className="mt-7 md:mt-16 md:w-[55%] sm:w-[80%] md:ml-[53%] lg:ml-[45%] xl:ml-[33%] border border-transparent">
        <p className="headingGlobal uppercase text-brandlight font-semibold">
          {mentorshipSectionData?.[2]?.data}{' '}
          <span className="headingGlobal text-black font-bold">{mentorshipSectionData?.[3]?.data}</span>
        </p>
        <p className="mt-[10%] headingGlobal uppercase font-bold">
          {mentorshipSectionData?.[4]?.data}{' '}
          <span className="text-brandlight text-lg">{mentorshipSectionData?.[5]?.data}</span>
        </p>
        <p className="mt-3 textBody font-light tracking-wide text-justify mx-auto sm:px-4">
          {mentorshipSectionData?.[6]?.data}
        </p>
      </div>
    </div>

    {/* ✅ Small screens (no background, just normal flow) */}
    <div className="block lg:hidden relative w-[88%] ml-[30px] border border-transparent md:h-auto">
      {image1 && (
        <Image
          src={image1}
          alt="image"
          className="w-full h-auto"
          width={290}
          height={100}
        />
      )}
      <div className="mt-7 md:mt-16 md:w-[90%] sm:w-[95%] mx-auto border border-transparent">
        <p className="text-2xl uppercase text-brandlight font-semibold">
          {mentorshipSectionData?.[2]?.data}{' '}
          <span className="text-3xl text-black font-bold">{mentorshipSectionData?.[3]?.data}</span>
        </p>
        <p className="mt-[5%] text-2xl uppercase font-bold">
          {mentorshipSectionData?.[4]?.data}{' '}
          <span className="text-brandlight text-base">{mentorshipSectionData?.[5]?.data}</span>
        </p>
        <p className="mt-3 text-base font-light tracking-wide text-justify mx-auto sm:px-4">
          {mentorshipSectionData?.[6]?.data}
        </p>
      </div>
    </div>

  </div>
</section>

  );
};

export default MentorshipSection;
