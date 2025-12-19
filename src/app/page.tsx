import { Metadata } from 'next';
export const dynamic = 'force-static'
import Banner from '@/components/home/Banner';
import BecomeChampion from '@/components/home/BecomeChampion';
import GlobalClient from '@/components/home/GlobalClient';
import HeroSection from '@/components/home/HeroSection';
import SecondTool from '@/components/home/SecondTool';
import Talents from '@/components/home/Talents';
import ToolSection from '@/components/home/ToolSection';
import CounterSection from '@/components/home/Counter';

async function fetchMeta() {
  const domain = "jschamps.com";
  const group = "Home"; 
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
  const group = 'Home';

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`;

  const res = await fetch(url, {
    cache: "force-cache", // fully static fetch
    
  });
  //console.log('Response:', res);

  if (!res.ok) throw new Error('Failed to fetch group data');
   const data: SectionItem[] = await res.json();
  // console.log('Data :::', data);
  const bannerSection = data.find((s) => s.component === 'Header');
  const becomeChampionSection = data.find((s) => s.component === 'BecomeChampion');
  const heroSection = data.find((s) => s.component === 'Hero');
  const talentSection = data.find((s) => s.component === 'Talents-details');
  // const globalClientSection = data.find((s) => s.component === 'Global Client Banner');
  const toolSection = data.find((s) => s.component === 'ToolSection');
  const secondToolSection = data.find((s) => s.component === 'SecondTool');
  const counterSection = data.find((s) => s.component === 'CounterBanner');
  // console.log("Counter Banner ::::>", bannerSection);

  return {
    headerData: bannerSection?.contents || [],
    becomeChampion: becomeChampionSection?.contents || [],
    heroSectionData: heroSection?.contents || [],
    talentData: talentSection?.contents || [],
    // globalClientData: globalClientSection?.contents || [],
    toolSectionData:toolSection?.contents || [],
    counterSectionData:counterSection?.contents || [],
    secondToolSectionData: secondToolSection
    ? [
        {
          name: secondToolSection.component, // "SecondTool"
          contents: secondToolSection.contents.map((c) => ({
            data: c.data,
            name: c.name,
            media_ref: c.media_ref,
          })),
        },
      ]
    : [],
  };
}

export default async function HomePage() {
  const sections = await getData();

  return (
    <main className="bg-white">
      <Banner headerData={sections.headerData} />
      <ToolSection toolSectionData={sections.toolSectionData} />
      <SecondTool secondToolSectionData={sections.secondToolSectionData} /> 
      <BecomeChampion becomeChampion={sections.becomeChampion} />
      <CounterSection counterSectionData={sections.counterSectionData} />
      {/* <GlobalClient globalClientData={sections.globalClientData} />  */}
      <HeroSection heroSectionData={sections.heroSectionData} />
      <Talents talantdata={sections.talentData} /> 
    </main>
  );
}

