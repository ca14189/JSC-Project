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

// Fetch metadata for the page
async function fetchMeta() {
  const domain = "jschamps.com";
  const group = "ContactUsKushinagar"; 
  // const API_URL = "http://localhost:3001/api/cms/meta";

 const url = `${process.env.NEXT_PUBLIC_BASE_URL}/meta?domain=${domain}&group=${group}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) return {};

  const json = await res.json();
  return json.data || {};
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await fetchMeta();
  const content = meta.content ?? {};

  return {
    title: content.title ?? "Default Title",
    description: content.description ?? "Default Description",

    openGraph: content.openGraph,
    twitter: content.twitter,
    keywords: content.keywords,
    robots: content.robots,
    icons: content.icons,
    authors: content.authors,

    creator: content.creator,
    publisher: content.publisher,
    applicationName: content.applicationName,

    metadataBase: content.metadataBase
      ? new URL(content.metadataBase)
      : undefined,
  };
}

// Fetch main contact page sections
// async function getData() {
//   const domain = 'Jschamps.com';
//   const page = 'ContactUsKushinagar';

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
//     { next: { revalidate: 60 } }
//   );

//   if (!res.ok) {
//     throw new Error('Failed to fetch page data');
//   }

//   const data = await res.json();
//   const allSections: SectionItem[] = data?.sections ?? [];
//   console.log("allSections", allSections);

//   return {
//     header: allSections.find((s) => s.name === 'Header')?.contents || [],
//     header2: allSections.find((s) => s.name === 'Header2')?.contents || [],
//     middle: allSections.find((s) => s.name === 'Middle')?.contents || [],
//     lowerMiddle:
//       allSections.find((s) => s.name === 'LowerMiddle')?.contents || [],
//   };
// }

async function getData() {
  const domain = 'jschamps.com';
  const group = 'ContactUsKushinagar';

const url = `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`;

  const res = await fetch(url, {
    cache: "force-cache", // fully static fetch
    
  });
  //console.log('Response:', res);

  if (!res.ok) throw new Error('Failed to fetch group data');
   const data: SectionItem[] = await res.json();
  // console.log('Data:', data);
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




// Page component
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
