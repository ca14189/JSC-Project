import BlogDetailsPage from "@/components/blogs/BlogDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;   // ✅ unwrap the Promise
  // console.log("Blog slug:", slug);
  return <BlogDetailsPage slug={slug} />;
}
