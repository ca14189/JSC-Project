import { Metadata } from 'next';
export const dynamic = "force-static"; 
import AboutBanner from '@/components/about/AboutBanner';

interface SectionItemComponent {
  type: 'text' | 'media';
  data: string;
  title: string;
  media_ref?: string;
}

interface SectionItem {
  name: string;
  contents: SectionItemComponent[];
  component: string;
}

interface ContentItem {
  type: 'text' | 'image';
  data: string;
}

type AboutPageProps = {
  headerData?: ContentItem[];
  groupDiscussion?: ContentItem[];
  getTrain?: ContentItem[];
  productDevelopment?: ContentItem[];
};

async function fetchMeta() {
  const domain = "jschamps.com";
  const group = "About"; 
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

// async function getData(): Promise<AboutPageProps> {
//   const domain = 'Jschamps.com';
//   const page = 'About';

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
//     { next: { revalidate: 60 } }
//   );

//   if (!res.ok) {
//     throw new Error('Failed to fetch page data');
//   }

//   const data = await res.json();
//   const all: SectionItem[] = data?.sections ?? [];

//   return {
//     headerData:
//       all.find((s) => s.name === 'Header')?.contents || [],
//     groupDiscussion:
//       all.find((s) => s.name === 'GroupDiscussion')?.contents || [],
//     getTrain:
//       all.find((s) => s.name === 'GetTrain')?.contents || [],
//     productDevelopment:
//       all.find((s) => s.name === 'Product Development')?.contents || [],
//   };
// }

async function getData() {
  const domain = 'jschamps.com';
  const group = 'About';

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`;

  const res = await fetch(url, {
    cache: "force-cache", // fully static fetch
    
  });

  if (!res.ok) throw new Error('Failed to fetch group data');
  const data: SectionItem[] = await res.json();
  // console.log('About Page Data ::::>', data);
  const headerData = data.find((s) => s.component === 'Header');
  const groupDiscussion = data.find((s) => s.component === 'GroupDiscussion');
  const getTrain = data.find((s) => s.component === 'GetTrain');
  const productDevelopment = data.find((s) => s.component === 'Product Development');
  const mentorship = data.find((s) => s.component === 'Mentorship Model');
  const learning = data.find((s) => s.component === 'Learning');

  return {
    headerData: headerData?.contents || [],
    groupDiscussion: groupDiscussion?.contents || [],
    getTrain: getTrain?.contents || [],
    productDevelopment: productDevelopment?.contents || [],
    mentorship: mentorship?.contents || [],
    learning: learning?.contents || [],
  };
}


export default async function AboutPage() {
  const { headerData, groupDiscussion, getTrain, productDevelopment, mentorship, learning } =
    await getData();

  return (
    <div>
      <AboutBanner
        headerData={headerData}
        groupDiscussion={groupDiscussion}
        getTrain={getTrain}
        productDevelopment={productDevelopment}
        mentorship={mentorship}
        learning={learning}
      />
    </div>
  );
}
