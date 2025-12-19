import { Metadata } from 'next';
export const dynamic = "force-static"
import ContactBanner from '@/components/contact/ContactBanner';

interface SectionItemComponent {
  type: 'text' | 'media';
  data: string;
}

interface SectionItem {
  name: string;
  contents: SectionItemComponent[];
  component: string;
}

// ---------- Fetch Metadata ----------
async function fetchMeta() {
  const domain = "jschamps.com";
  const group = "ContactUsLucknow"; 
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

// ---------- Fetch Page Data ----------
// async function getData(): Promise<{
//   header: SectionItemComponent[];
//   header2: SectionItemComponent[];
//   middle: SectionItemComponent[];
//   lowerMiddle: SectionItemComponent[];
// }> {
//   const domain = 'Jschamps.com';
//   const page = 'ContactUsLucknow';

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
//     { next: { revalidate: 60 } }
//   );

//   if (!res.ok) {
//     throw new Error('Failed to fetch page data');
//   }

//   const data = await res.json();
//   const allSections: SectionItem[] = data?.sections ?? [];
//   console.log('Contact Lucknow Page Data:', JSON.stringify(allSections, null, 2));

//   return {
//     header: allSections.find((s) => s.name === 'Header')?.contents || [],
//     header2: allSections.find((s) => s.name === 'Header2')?.contents || [],
//     middle: allSections.find((s) => s.name === 'Middle')?.contents || [],
//     lowerMiddle: allSections.find((s) => s.name === 'LowerMiddle')?.contents || [],
//   };
// }


async function getData() {
  const domain = 'jschamps.com';
  const group = 'ContactUsLucknow';

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`;

  const res = await fetch(url, {
    cache: "force-cache", // fully static fetch
    
  });
  //console.log('Response:', res);

  if (!res.ok) throw new Error('Failed to fetch group data');
   const data: SectionItem[] = await res.json();
  //console.log('Data:', data);
  const banner = data.find((s) => s.component === 'Header');
  const contactinfo = data.find((s) => s.component === 'Header2');
  const message = data.find((s) => s.component === 'Middle');
  const about = data.find((s) => s.component === 'LowerMiddle');

  return {
    header: banner?.contents || [],
    header2: contactinfo?.contents || [],
    middle: message?.contents || [],
    lowerMiddle: about?.contents || [],
  };
}

// ---------- Page Component ----------
export default async function ContactJSchampsPage() {
  const sections = await getData();

  return (
    <div>
      <ContactBanner
        header={sections.header}
        header2={sections.header2}
        middle={sections.middle}
        lowerMiddle={sections.lowerMiddle}
      />
    </div>
  );
}
