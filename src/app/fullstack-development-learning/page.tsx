import { Metadata } from 'next';
import React from 'react';
export const dynamic = 'force-static'

import CurriculumModules from '@/components/training/CurriculumModules';
import CurriculumSection from '@/components/training/CurriculumSection';
import FaqSection from '@/components/training/FaqSection';
import HeroSection from '@/components/training/HeroSection';
import StatsSection from '@/components/training/StatsSection';

async function fetchMeta() {
  const domain = "jschamps.com";
  const group = "Upcoming Batch"; 
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
//   const page = 'Upcoming Batch';

//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`, 
//   // { cache: 'no-store'}
//   { next: { revalidate: 60 } }
// );
// //  console.log("this is how it work page",res);
 
//   if (!res.ok) {
//     throw new Error('Failed to fetch page data');
//   }

//   const data = await res.json();
//   const all:SectionItem[] = data?.sections ?? [];

//   return {
//           heroSection: all.find((s) => s.name === 'Header')?.contents || [],
//           statsSection: all.find((s) => s.name === 'Stats')?.contents || [],
//           curriculumSection:all.find((s) => s.name === 'Header2')?.contents || [],
//           curriculumModules: all.slice(3,10) || [],
//           faqSection: all.find((s) => s.name === 'LowerMiddle')?.contents || [],
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
  const group = 'Upcoming Batch';

const url = `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`;

  const res = await fetch(url, {
    cache: "force-cache", // fully static fetch
    
  });
  //console.log('Response:', res);

  if (!res.ok) throw new Error('Failed to fetch group data');
   const data: SectionItem[] = await res.json();
 // console.log('DataHHH:', data);
  const HeroSection = data.find((s) => s.component === 'Header');
  const statsData = data.find((s) => s.component === 'Stats');
  const curruculumSectionData = data.find((s) => s.component === 'Header2');
  const curriculumModulesData = data.find((s) => s.component === 'CurriculumModules');
  const Faq = data.find((s) => s.component === 'LowerMiddle');

  return {
    heroSection: HeroSection?.contents || [],
    statsSection: statsData?.contents || [],
    curriculumSection: curruculumSectionData?.contents || [],
    curriculumModules: curriculumModulesData?.contents || [],
    faqSection: Faq?.contents || [],
  };
}


export default async function TrainingPage() {
const sections = await getData();

    return (
        <div>
            <HeroSection heroSectionData = {sections.heroSection}/>
            <StatsSection statsSectionsData = {sections.statsSection}/>
            <CurriculumSection curriculumSectionData = {sections.curriculumSection}/>
            <CurriculumModules curriculumModulesData = {sections.curriculumModules}/>
            <FaqSection faqSectionData ={sections.faqSection} />
        </div>
    );
};

