// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { useState } from 'react';
// import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
// import {formatWithLineBreaks} from '../../utils/formatAddress';
// import { FaWhatsapp } from "react-icons/fa";
// //import officeImg from '../../../public/images/jschampsOffice.jpeg';

// interface ContentItem {
//   type: 'text' | 'media';
//   data: string;
//   media_ref?: string; // Optional, used for images or other media references
// }

// interface ContactBannerProps {
//   header: ContentItem[];
//   header2: ContentItem[];
//   middle: ContentItem[];
//   lowerMiddle: ContentItem[];
//   footer?: ContentItem[];
// }

// export default function ContactBanner({
//   header,
//   header2,
//   middle,
//   lowerMiddle,
// }: ContactBannerProps) {
//   // console.log('Contact Banner Data :, contact info  ', lowerMiddle);
//   // const router = useRouter();



//   // const [error, setError] = useState('');



//   // const handleSignup = async (e: React.FormEvent) => {
//   //   // e.preventDefault();
//   //   // setError('');
//   //   // try {
//   //   //   const res = ''; // your actual API here
//   //   //   const data = await res.json();
//   //   //   if (!res.ok) {
//   //   //     setError(data.error || 'Signup failed');
//   //   //     return;
//   //   //   }
//   //   //   localStorage.setItem('token', data.token);
//   //   //   router.push('/');
//   //   // } catch {
//   //   //   setError('Something went wrong');
//   //   // }
//   // };

//   // Get dynamic data
//   const headerBg = header.find((item) => item.type === 'media')?.media_ref || '';
//   const headerTitle = header.find((item) => item.type === 'text')?.data || '';
//   const headerSubtitle =
//     header.filter((item) => item.type === 'text')[1]?.data || '';

//   const header2Image =
//     header2?.[1].media_ref || '';
//    // console.log("header2Image", header2Image);
//   const address =
//     header2?.[3]?.data || '';
//   const phone = header2.find((item) => typeof item.data === 'string' && item.data.includes('+91'))
//     ?.data || '';
//   const email = header2.find((item) => typeof item.data === 'string' && item.data.includes('.com'))?.data || '';

//   const middleTitle =
//     middle.find((item) => item.data.includes('Send Us'))?.data || '';
//   const middleParas = middle.filter(
//     (item) => item.type === 'text' && !item.data.includes('Send Us'),
//   );
//   // console.log('Middle Paras :::', middleParas);

//   const aboutTitle = lowerMiddle[0]?.data || '';
//   const aboutParas = lowerMiddle.slice(1);
//   const officeImg = middle[8]?.media_ref || '';
//   //console.log("About paragraph >>>>",aboutParas);
//   //console.log("About Title >>>>",aboutTitle);
//   //console.log("Middle Data >>>>",officeImg);

//   return (
//     <div className='text-black'>
//       {/* Banner Section */}
//       <div
//         className='bg-no-repeat bg-cover w-full h-[720px] flex flex-col justify-center items-center text-white text-center px-4'
//         style={{ backgroundImage: `url(${headerBg})` }}
//       >
//         <p className='font-bold text-2xl sm:text-4xl md:text-5xl'>
//           {headerTitle}
//         </p>
//         <p className='mt-4 text-sm sm:text-base md:text-xl'>{headerSubtitle}</p>
//       </div>

//       {/* Contact Info Section */}
//       <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-10 px-4'>
//         {/* Image Card
//         <div className='bg-white rounded-lg shadow-lg w-full max-w-[500px] h-[300px] overflow-hidden -mt-20 '>
//           <Image
//             src={header2Image.trim()}
//             width={500}
//             height={300}
//             alt='contact-image'
//             className='w-full h-full object-cover'
//           />
//         </div> */}

//         <div className='bg-white rounded-lg shadow-lg w-full max-w-[500px] h-[300px] overflow-hidden -mt-20'>
//           <iframe
//              src={header2Image.trim()}
//              width={500}
//              height={300}
//              style={{ border: 0 }}
//              allowFullScreen
//              loading="lazy"
//              referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//       </div>

//         {/* Info Card */}
//         <div className='bg-[#f3eada] rounded-lg shadow-lg w-full max-w-[500px] h-[300px] p-6 space-y-4 mt-6 md:mt-[-80px] overflow-auto'>
//           <div className='flex items-start'>
//             <MdLocationOn className='text-2xl mt-1' />
//             <div className='ml-4'>
//               <p className='font-bold'>Address</p>
//               <p>{formatWithLineBreaks(address)}</p>
//             </div>
//           </div>
//   <div className="flex flex-col gap-4 text-base">
//   {/* Phone 1 */}
//   <div className="flex items-start gap-2">
//     <MdPhone className="text-xl mt-1" />
//     <div className="flex flex-col">
//       <span className="font-bold">Phone:</span>
//       <span>{phone}</span>
//     </div>
//   </div>

//   {/* Phone 2 */}
//   <div className="flex items-start gap-2">
//     <MdPhone className="text-xl mt-1" />
//     <div className="flex flex-col">
//       <span className="font-bold">Alt:</span>
//       <span>91-9839475539</span>
//     </div>
//   </div>

//   {/* WhatsApp */}
//   <div className="flex items-start gap-2">
//     <FaWhatsapp className="text-xl mt-1 text-green-500" />
//     <div className="flex flex-col">
//       <span className="font-bold">WhatsApp:</span>
//       <span>9250287255</span>
//     </div>
//   </div>
// </div>

//           <div className='flex items-start'>
//             <MdEmail className='text-2xl mt-1' />
//             <div className='ml-4'>
//               <p className='font-bold'>Email</p>
//               <p>{email}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Middle Section */}
//         <div className="md:mt-32 md:flex p-6 justify-center lg:space-x-36 flex-col lg:flex-row">
//   {/* Left content */}
//   <div className="mt-25 inline-block pb-10">
//     <p className="md:text-5xl text-black font-bold sm:text-2xl inline-block relative text-xl">
//       {aboutTitle}
//       {/* underline directly under text */}
//       <span className="absolute left-0 -bottom-1 h-1 w-full border-b-2 border-gray-500"></span>
//     </p>

//     {/* {aboutParas.map((para, i) => (
//       <p
//         key={i}
//         className="md:text-lg md:mt-3 sm:text-sm max-w-[550px] text-justify mt-2"
//       >
//         {para.data}
//       </p>
//     ))} */}

//     {aboutParas.map((para, i) => {
//   const text = para.data?.trim() || "";

//   // Case 1: Our Services
//   if (text.startsWith("Our Services")) {
//     const lines = text.split("\n"); // split by new lines
//     return (
//       <div key={i} className="md:text-lg md:mt-3 sm:text-sm max-w-[550px] mt-2">
//         <p className="font-bold mb-2">{lines[0]}</p>
//         <ul className="list-disc list-inside space-y-1">
//           {lines.slice(1).map((line, idx) => {
//             const [title, desc] = line.split("–"); // split at dash
//             return (
//               <li key={idx}>
//                 <span className="font-bold">{title.trim()}</span>
//                 {desc ? ` – ${desc.trim()}` : ""}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }

//   // Case 2: Our Mission
//   if (text.startsWith("Our Mission")) {
//     return (
//       <div key={i} className="md:text-lg md:mt-3 sm:text-sm max-w-[550px] mt-2">
//         <p className="font-bold">Our Mission:</p>
//         <p className="mt-1">
//           {text.replace("Our Mission:", "").trim()}
//         </p>
//       </div>
//     );
//   }

//   // Default case (normal paragraph)
//   return (
//     <p
//       key={i}
//       className="md:text-lg md:mt-3 sm:text-sm max-w-[550px] text-justify mt-2"
//     >
//       {text}
//     </p>
//   );
// })}


//   </div>

//   {/* Right Image (FIXED SIZE) */}
//   <div className="relative flex-shrink-0 w-[250px] md:w-[350px] h-[400px] md:h-[500px] ml-10">
//     <Image
//       alt="office image"
//       src={officeImg}
//       fill
//       className="object-cover rounded-lg"
//     />

//     {/* tilted border only on lg */}
//     <div className="hidden lg:block absolute inset-0 rounded-lg border-4 border-amber-500 -rotate-3 z-10 pointer-events-none" />
//   </div>
// </div>
//     </div>
//   );
// }

'use client';
import React from 'react';
import Image from 'next/image';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { formatWithLineBreaks } from '../../utils/formatAddress';

interface ContentItem {
  type: 'text' | 'media';
  data: string;
  media_ref?: string;
}

interface ContactBannerProps {
  header: ContentItem[];
  header2: ContentItem[];
  middle: ContentItem[];
  lowerMiddle: ContentItem[];
  footer?: ContentItem[];
}

export default function ContactBanner({
  header,
  header2,
  middle,
  lowerMiddle,
}: ContactBannerProps) {
  const headerBg = header.find((item) => item.type === 'media')?.media_ref || '';
  const headerTitle = header.find((item) => item.type === 'text')?.data || '';
  const headerSubtitle = header.filter((item) => item.type === 'text')[1]?.data || '';

  const header2Image = header2?.[1].media_ref || '';
  const address = header2?.[3]?.data || '';

  const phone = header2.find((item) =>
    typeof item.data === 'string' && item.data.includes('+91')
  )?.data || '';

  const email = header2.find((item) =>
    typeof item.data === 'string' && item.data.includes('.com')
  )?.data || '';

  const whatsapp = header2.find((item) =>
    typeof item.data === 'string' && item.data.includes('WhatsApp:')
  )?.data.replace('WhatsApp:', '').trim() || '';

  const altPhone = header2.find((item) =>
    typeof item.data === 'string' && item.data.includes('Alt:')
  )?.data.replace('Alt:', '').trim() || '';

  const middleTitle = middle.find((item) =>
    item.data.includes('Send Us')
  )?.data || '';

  const middleParas = middle.filter(
    (item) => item.type === 'text' && !item.data.includes('Send Us')
  );

  const aboutTitle = lowerMiddle[0]?.data || '';
  const aboutParas = lowerMiddle.slice(1);
  const officeImg = middle[8]?.media_ref || '';

  return (
    <div className='text-black'>
      {/* Banner Section */}
      <div
        className='bg-no-repeat bg-cover w-full h-[720px] flex flex-col justify-center items-center text-white text-center px-4'
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <p className='font-bold headingGlobal'>
          {headerTitle}
        </p>
        <p className='mt-4 text-sm sm:text-base md:text-xl'>{headerSubtitle}</p>
      </div>

      {/* Contact Info Section */}
      <div className='flex flex-col md:flex-row justify-center items-stretch gap-10 mt-10 px-4'>

        {/* Map iframe */}
        <div className='bg-white rounded-lg shadow-lg w-full max-w-[500px] md:h-[350px] overflow-hidden -mt-20 flex-1'>
          <iframe
            src={header2Image.trim()}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Info Card */}
        <div className='bg-[#f3eada] rounded-lg shadow-lg w-full max-w-[500px] p-6 space-y-4 mt-6 md:mt-[-80px] flex-1 md:h-[350px] flex flex-col justify-between'>
          {/* Address */}
          <div className='flex items-start'>
            <MdLocationOn className='text-2xl mt-1' />
            <div className='ml-4'>
              <p className='font-bold'>Address</p>
              <p>{formatWithLineBreaks(address)}</p>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-col gap-4 text-base">
            {/* Phone */}
            <div className="flex items-start gap-2">
              <MdPhone className="text-xl mt-1" />
              <div className="flex flex-col">
                <span className="font-bold">Phone:</span>
                <span>{phone}</span>
              </div>
            </div>

            {/* Alt Phone */}
            <div className="flex items-start gap-2">
              <MdPhone className="text-xl mt-1" />
              <div className="flex flex-col">
                <span className="font-bold">Alt:</span>
                <span>{altPhone}</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-2">
              <FaWhatsapp className="text-xl mt-1 text-brandGreen" />
              <div className="flex flex-col">
                <span className="font-bold">WhatsApp:</span>
                <span>{whatsapp}</span>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className='flex items-start'>
            <MdEmail className='text-2xl mt-1' />
            <div className='ml-4'>
              <p className='font-bold'>Email</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="md:mt-32 md:flex p-6 justify-center lg:space-x-36 flex-col lg:flex-row">
        {/* Left content */}
        <div className="mt-25 inline-block pb-10">
          <p className="headingGlobal text-black font-bold sm:text-2xl inline-block relative text-xl">
            {aboutTitle}
            <span className="absolute left-0 -bottom-1 h-1 w-full border-b-2 border-grayLight"></span>
          </p>

          {aboutParas.map((para, i) => {
            const text = para.data?.trim() || '';

            if (text.startsWith('Our Services')) {
              const lines = text.split('\n');
              return (
                <div key={i} className="textConsistent mt-2 max-w-[550px]">
                  <p className="font-bold mb-2">{lines[0]}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {lines.slice(1).map((line, idx) => {
                      const [title, desc] = line.split('–');
                      return (
                        <li key={idx}>
                          <span className="font-bold">{title.trim()}</span>
                          {desc ? ` – ${desc.trim()}` : ''}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            }

            if (text.startsWith('Our Mission')) {
              return (
                <div key={i} className="textConsistent mt-2 max-w-[550px]">
                  <p className="font-bold">Our Mission:</p>
                  <p className="mt-1">{text.replace('Our Mission:', '').trim()}</p>
                </div>
              );
            }

            return (
              <p key={i} className="textConsistent mt-2 max-w-[550px] text-justify">
                {text}
              </p>
            );
          })}

        </div>

        {/* Right Image */}
        <div className="relative flex-shrink-0 w-[250px] md:w-[350px] h-[400px] md:h-[500px] ml-10">
          <Image
            alt="office image"
            src={officeImg}
            fill
            className="object-cover rounded-lg"
          />
          <div className="hidden lg:block absolute inset-0 rounded-lg border-4 border-brandlight -rotate-3 z-10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
