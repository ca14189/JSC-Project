import BlogDetailsPage from "@/components/blogs/BlogDetails";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;   // ✅ unwrap the Promise
  return <BlogDetailsPage id={id} />;
}
