import TeamSection from "@/components/ourTeam/TeamSection";
import { Metadata } from "next";

export interface ContentItem {
  type: "text" | "media";
  data?: string;
  media_ref?: string;
}

export interface ApiResponseItem {
  _id: string;
domain: string;
  group: string;
  component: string;
  contents: ContentItem[];
}



async function getData() {
  const domain = "jschamps.com";
  const group = "OurTeam";

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/cms-static?domain=${domain}&group=${group}`;
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) return { OurTeam: [] };

  const all: ApiResponseItem[] = await res.json();

    return {
    OurTeam:
    all.find((s) => s.component === "TeamSection")?.contents || [],
   };
}

async function fetchMeta() {
  const domain = "jschamps.com";
  const group = "OurTeam"; 
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

export default async function Page() {
  const data = await getData();

  return <TeamSection contents={data.OurTeam} />;
}