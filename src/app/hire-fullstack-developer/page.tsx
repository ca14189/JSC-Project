import { Metadata } from 'next';
import '@/lib/env';
export const dynamic = 'force-static'
import Banner from '@/components/hire/Banner';
import Faq from '@/components/hire/Faq';
import Hire from '@/components/hire/Hire'
import HireDeveloper from '@/components/hire/HireDeveloper';
import TopTools from '@/components/hire/TopTools';
import Why from '@/components/hire/Why'
import WhyHire from '@/components/hire/WhyHire';

import strip from '../../../public/images/strip-hire.png';

async function fetchMeta() {
  const domain = "jschamps.com";
  const group = "Hire"; 
  // const API_URL = "http://localhost:3001/api/cms/meta";

 const url = `${process.env.NEXT_PUBLIC_BASE_URL}/meta?domain=${domain}&group=${group}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) return {};

  const json = await res.json();
  return json.data || {};
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await fetchMeta();
// console.log("this is meta",meta)
  return {
    title: meta.title ?? "Default Title",
    description: meta.description ?? "Default Description",

    openGraph: meta.openGraph ?? {},  

    twitter: meta.twitter ?? {},       

    keywords: meta.keywords ?? [],     

    robots: meta.robots ?? {},

    icons: meta.icons ?? {},

    authors: meta.authors ?? [],

    creator: meta.creator,
    publisher: meta.publisher,

    applicationName: meta.applicationName,

    metadataBase: meta.metadataBase
      ? new URL(meta.metadataBase)
      : undefined,
  };
}


// interface SectionItemComponent {
//   name: string;
//   type: 'text' | 'image';
//   data: string;
// }

// interface SectionItem {
//   name: string;
//   contents: SectionItemComponent[];
// }
// async function getData() {
//   const domain = 'Jschamps.com';
//   const page = 'Hire';

//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`, 
//   // {  cache: 'no-store'}
//   { next: { revalidate: 60 } }
// );
 
//   if (!res.ok) {
//     throw new Error('Failed to fetch page data');
//   }

//   const data = await res.json();
//   const all:SectionItem[] = data?.sections ?? [];

//   return {
//     banner: all.find((s) => s.name === 'Banner')?.contents || [],
//     hire: all.find((s) => s.name === 'header')?.contents || [],
//     why: all.find((s) => s.name === 'why')?.contents || [],
//     tools: all.find((s) => s.name === 'tools')?.contents || [],
//     hireDeveloper: all.find((s) => s.name === 'hire-javascript-developer')?.contents || [],
//     whyHire: all.find((s) => s.name === 'why-hire')?.contents || [],
//     faq: all.find((s) => s.name === 'FAQ')?.contents || [],
    
//     };
// }

interface SectionItemComponent {
  name: string;
  type: 'text' | 'media';
  data: string;
  media_ref?: string;
}

interface SectionItem {
  name: string;
  domain: string;
  group: string;
  component: string;
  contents: SectionItemComponent[];
}

async function getData() {
  const domain = 'jschamps.com';
  const group = 'Hire';

const url = `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`;

  const res = await fetch(url, {
    cache: "force-cache", // fully static fetch
    
  });
  //console.log('Response:', res);

  if (!res.ok) throw new Error('Failed to fetch group data');
   const data: SectionItem[] = await res.json();
  //console.log('Data:', data);
  const bannerSection = data.find((s) => s.component === 'Banner');
  const hireSection = data.find((s) => s.component === 'header');
  const whySection = data.find((s) => s.component === 'why');
  const toolSection = data.find((s) => s.component === 'tools');
  const hireDeveloperSection = data.find((s) => s.component === 'hire-javascript-developer');
  const whyHireSection = data.find((s) => s.component === 'why-hire');
  const faqSection = data.find((s) => s.component === 'FAQ');

  return {
    headerData: bannerSection?.contents || [],
    hire: hireSection?.contents || [],
    why: whySection?.contents || [],
    tools: toolSection?.contents || [],
    hireDeveloper: hireDeveloperSection?.contents || [],
    whyHire: whyHireSection?.contents || [],
    faq: faqSection?.contents || [],
  };
}


export default async function HomePage() {
  const sections = await getData();

  return (
    <div>
        <Banner headerData={sections.headerData} />
        <div className='lg:pt-36 md:pt-36 pt-10 sm:pt-10 w-[100%]'
      style={{
              backgroundImage: `url(${strip.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'top',
            }}></div>
        <Hire hireSectionData={sections.hire}/>
        <Why whySectionData={sections.why}/>
        <TopTools topToolsSectionData={sections.tools}/>
        <HireDeveloper HireDeveloperSectionData={sections.hireDeveloper}/>
        <WhyHire whyHireSectionData={sections.whyHire}/>
        <Faq FaqSectionData={sections.faq} /> 
    </div>
  );
}
