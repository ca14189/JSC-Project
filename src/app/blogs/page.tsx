import BlogSection from '@/components/blogs/BlogSection'
import { Metadata } from 'next';

async function fetchMeta() {
  const domain = "jschamps.com";
  const group = "Blog"; 
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

const page = () => {
  return (
    <BlogSection/>
  )
}

export default page