import { Metadata } from 'next';
export const dynamic = "force-static"
import GraderSystem from '@/components/how-works/GraderSystem';
import HeroSection from '@/components/how-works/HeroSection';
import HowItWorks from '@/components/how-works/HowItWorks';
import MentorshipSection from '@/components/how-works/MentorshipSection';
import WhatToExpect from '@/components/how-works/WhatToExpect';
import ProjectSection from "@/components/how-works/ProjectSection";
import GoogleCards from '@/components/how-works/GoogleCardSection';

async function fetchMeta() {
  const domain = "jschamps.com";
  const group = "HowItWorks"; 
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
//   type :"text" | "image",
//   data : string,
//   name:string
// }

// interface SectionItem {
//   name: string;
//   contents: SectionItemComponent[];
// }

// async function getData() {
//   const domain = 'Jschamps.com';
//   const page = 'HowItWorks';

//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`, {
//     cache: 'no-store'
//   });
 
//   if (!res.ok) {
//     throw new Error('Failed to fetch page data');
//   }

//   const data = await res.json();
//   const allHowItWorkData:SectionItem[] = data?.sections ?? [];

//   return {
//           HeroSection: allHowItWorkData.find((s) => s.name === 'Header')?.contents || [],
//           HowItWorks: allHowItWorkData.find((s) => s.name === 'Header2')?.contents || [],
//           MentorshipSection: allHowItWorkData.find((s) => s.name === 'Middle')?.contents || [],
//           WhatToExpect: allHowItWorkData.find((s) => s.name === 'LowerMiddle1')?.contents || [],
//           GraderSystem: allHowItWorkData.slice(4,6) || [],
//   };
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
  const group = 'HowItWorks';

const url = `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`;

  const res = await fetch(url, {
    cache: "force-cache", // fully static fetch
    
  });
  // console.log('Response ::::>', res);

  if (!res.ok) throw new Error('Failed to fetch group data');
   const data: SectionItem[] = await res.json();
//  console.log('How it work data ::::>', data);
  const heroSection = data.find((s) => s.component === 'Header');
  const howitworksSection = data.find((s) => s.component === 'Header2');
  const mentor = data.find((s) => s.component === 'Middle');
  const expectSection = data.find((s) => s.component === 'LowerMiddle1');
  const graderSection = data.slice(4,6)||[];
  const projectSection = data.find((s) => s.component === 'ProjectSection');
  const googleCardSection = data.find((s) => s.component === 'GoogleCardSection');
  // console.log("Google Card Section Section ::::>", googleCardSection);
  return {
    HeroSection: heroSection?.contents || [],
    HowItWorks: howitworksSection?.contents || [],
    MentorshipSection: mentor?.contents || [],
    WhatToExpect: expectSection?.contents || [],
    GraderSystem: graderSection?.flatMap(s => s.contents || []),
    projectSection: projectSection?.contents || [],
    googleCardSection: googleCardSection?.contents || [],
  };
}


export default async function WorksPage(){
 const sections = await getData();

  return (
    <div>
      <HeroSection heroSectionData={sections.HeroSection}/>
      <HowItWorks howItWorkData={sections.HowItWorks}/>
      <MentorshipSection mentorshipSectionData = {sections.MentorshipSection}/>
      <WhatToExpect whatToExpectData = {sections.WhatToExpect} />
      <GoogleCards googleCardData = {sections.googleCardSection} />
      <GraderSystem graderSystemData = {sections.GraderSystem}/>
      <ProjectSection projectData={sections.projectSection} />
    </div>
  );
};
