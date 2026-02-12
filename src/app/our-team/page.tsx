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

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the people behind JSChamps",
};

export default async function Page() {
  const data = await getData();

  return <TeamSection contents={data.OurTeam} />;
}