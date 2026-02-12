// blog detail api is integrated here 

import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
};

export default async function BlogDetailsPage({ slug }: Props) {
  const decodedSlug = decodeURIComponent(slug);

  const res = await fetch(
    `http://localhost:3001/api/cms/blog/${decodedSlug}?domain=jschamps.com`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Blog not found
      </div>
    );
  }

  const { data: blog } = await res.json();
  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-600">Blog not found.</p>
        <Link href="/blogs" className="mt-6 underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen">
      <div className="h-20" />

      <div className="max-w-4xl mx-auto px-6">

        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
          {blog.category}
        </p>
        {/* Blog title */}
<h1 className="text-3xl md:text-4xl font-bold mb-6">
  {blog.title}
</h1>

{/* Author + date section */}
<div className="flex items-center gap-3 mb-10">
  <Image
    src="/images/dummyUser.png"
    alt={blog.author}
    width={36}
    height={36}
    className="rounded-full"
  />

  <div className="text-sm text-gray-600">
    <span className="font-medium">{blog.author}</span>
    <span className="mx-2">•</span>
    <span>{new Date(blog.date).toDateString()}</span>
  </div>
</div>


        {/* <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {blog.title}
        </h1> */}
{/* 
        <div className="flex items-center gap-3 mb-10">
          <Image
            src="/images/dummyUser.png"
            alt={blog.author}
            width={36}
            height={36}
            className="rounded-full"
          />
          <div className="text-sm text-gray-600">
            <span className="font-medium">{blog.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(blog.date).toDateString()}</span>
          </div>
        </div> */}

        {/* <div className="mb-10">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            width={900}
            height={500}
            className="rounded-xl"
          />
        </div> */}

        {/* <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        /> */}
        <div
  className="blog-content"
  dangerouslySetInnerHTML={{ __html: blog.content }}
/>


        <div className="mt-16 border-t pt-8">
          <Link href="/blogs" className="text-sm text-gray-600">
            ← Back to blogs
          </Link>
        </div>
      </div>
    </article>
  );
}
