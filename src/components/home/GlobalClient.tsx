'use client';

import Image from "next/image";
interface GlobalClientComponent {
  name: string;
  type: 'text' | 'media';
  data: string;
  media_ref?: string;
}
interface GlobalClientItem {
  globalClientData: GlobalClientComponent[];
}
const GlobalClient = ({ globalClientData } :GlobalClientItem) => {
  //console.log("banner data", globalClientData);

  const bannerImg = globalClientData?.[0].media_ref ?? '';

  return (
    <div className="w-full mt-16">
      {bannerImg && (
        <Image
          src={bannerImg}
          alt="Banner Image"
          width={1920}          // Add your desired width
          height={600}          // Add your desired height
          className="w-full h-auto object-cover"
        />
      )}
    </div>
  );
};

export default GlobalClient;
