import Image from "next/image";
import { Blog } from "@/lib/blogdata";
import Link from "next/link";

type Props = {
  blog: Blog;
};

export default function BlogCard({ blog }: Props) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="block">
      <article className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 min-h-[470px]">
        
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-black text-white shadow">
            {blog.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">{blog.date}</p>

          <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-3 group-hover:text-blue-800 transition">
            {blog.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            {blog.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <Image
              src={blog.authorImage}
              alt={blog.author}
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">
                {blog.author}
              </p>
              <p className="text-xs text-gray-500">Content Writer</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
