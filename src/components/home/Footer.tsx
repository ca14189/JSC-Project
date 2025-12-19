'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  FaFacebookF, FaInstagram, FaLinkedin,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { formatWithLineBreaks } from '../../utils/formatAddress';

interface FooterItems {
  type: 'text' | 'media';
  media_ref?: string;
  data: string;
  title: string;
  name: string;
}

interface FooterProps {
  footerDetails: FooterItems[];
  footerBannerDetails: FooterItems[];
}

const Footer: React.FC<FooterProps> = ({ footerDetails, footerBannerDetails }) => {
  const router = useRouter();

  if (!footerDetails || footerDetails.length < 2) {
    return <div className="text-center text-white py-4">...Loading</div>;
  }

  const footerDetailsData = footerDetails ?? [];
  const footerPoster = footerDetailsData?.[6]?.media_ref;
  const links = footerDetails?.slice(8);

  return (
    <div className="bg-[#343434] text-white py-8 px-4 md:px-16 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">

          {/* Column 1: Address only */}
          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 text-center">
            <p className="md:text-2xl text-xl font-bold mb-2">
              {footerDetailsData?.[0]?.data ?? ''}
            </p>

            {/* Address */}
            <div className="w-full flex justify-center mb-2">
              <div className="flex items-start max-w-[240px] text-left">
                <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0" />
                <span>{formatWithLineBreaks(footerDetailsData?.[1]?.data)}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl text-center font-bold mb-2">Quick Links</h3>
            <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center md:items-start">
              {/* First Column */}
              <ul className="space-y-2 text-center md:text-left">
                <li className="hover:text-brandlight cursor-pointer" onClick={() => router.push('/')}>Home</li>
                <li className="hover:text-brandlight cursor-pointer" onClick={() => router.push('/about-fullstack-development')}>About</li>
                <li className="hover:text-brandlight cursor-pointer" onClick={() => router.push('/hire-fullstack-developer')}>Hire</li>
                <li className="hover:text-brandlight cursor-pointer" onClick={() => router.push('/how-fullstack-development-learning-works')}>How It Works</li>
                <li className="hover:text-brandlight cursor-pointer" onClick={() => router.push('/fullstack-development-learning')}>Learning</li>
              </ul>

              {/* Second Column */}
              <ul className="space-y-2 mt-4 md:mt-0 text-center md:text-left">
                <li className="hover:text-brandlight cursor-pointer">
                  <a href="https://blog.jschamps.com">Blog</a>
                </li>
                <li className="hover:text-brandlight cursor-pointer">
                  Contact Us
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li className="hover:text-brandyellow cursor-pointer" onClick={() => router.push('/software-development-learning-kushinagar')}>Kushinagar</li>
                    <li className="hover:text-brandyellow cursor-pointer" onClick={() => router.push('/software-development-learning-lucknow')}>Lucknow</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>



          {/* Column 3: Poster & CTA */}
          <div className="w-full md:w-1/3 px-4 m-30 md:text-center">
            <p className="font-bold text-xl mt-4 md:mt-0 ml-0 md:ml-20 text-center md:text-left">
              {footerDetailsData?.[7]?.data?.slice(0, 20) ?? ''}
            </p>
            <p className="font-bold text-xl ml-0 md:ml-24 text-center md:text-left">
              {footerDetailsData?.[7]?.data?.slice(20, 43) ?? ''}
            </p>


            {footerPoster && (
              <div className='mt-4 flex justify-center'>
                <Image src={footerPoster} alt='Footer Banner' width={100} height={100} />
              </div>
            )}


            <div className='mt-4 flex justify-center space-x-3 text-2xl m-30 md:ml-3'>
              <a target='_blank' rel='noopener noreferrer' href={links?.[0]?.data} className='hover:text-brandlight'><FaFacebookF /></a>
              <a target='_blank' rel='noopener noreferrer' href={links?.[3]?.data} className='hover:text-brandlight'><FaLinkedin /></a>
              <a target='_blank' rel='noopener noreferrer' href={links?.[1]?.data} className='hover:text-brandlight'><FaInstagram /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
