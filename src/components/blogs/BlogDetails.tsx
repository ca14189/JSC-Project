import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/blogdata";

type Props = {
  id: string ;
};

export default function BlogDetailsPage({ id }: Props) {
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-600">Blog not found.</p>

        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg mt-8
                    bg-gray-100 text-gray-700 font-medium
                    hover:bg-gray-200 hover:text-gray-800 transition"
        >
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
  <article className="bg-white min-h-screen">

    {/* Top spacing */}
    <div className="h-20" />

    {/* Container */}
    <div className="max-w-4xl mx-auto px-6">

      {/* Category */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
        {blog.category}
      </p>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
        {blog.title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-10">
        <Image
          src={blog.authorImage}
          alt={blog.author}
          width={36}
          height={36}
          className="rounded-full"
        />
        <div className="text-sm text-gray-600">
          <span className="font-medium text-gray-900">{blog.author}</span>
          <span className="mx-2">•</span>
          <span>{blog.date}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t mb-10" />

      {/* Featured Image */}
      <div className="mb-10 flex justify-center">
        <Image
          src={blog.image}
          alt={blog.title}
          width={600}
          height={500}
          className="rounded-xl object-cover"
        />
      </div>

      {/* Article */}
      <div className="prose prose-gray max-w-none text-[17px] leading-relaxed">
        {blog.content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t flex justify-between items-center">

        <Link
          href="/blogs"
          className="text-sm text-gray-600 hover:text-gray-900 transition"
        >
          ← Back to blogs
        </Link>

        <span className="text-xs text-gray-400">
          Thanks for reading
        </span>
      </div>
    </div>

    {/* Bottom spacing */}
    <div className="h-24" />
  </article>
);

}
