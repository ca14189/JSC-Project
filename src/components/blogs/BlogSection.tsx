import BlogCard from "./BlogCard";
// import { blogs } from "@/lib/blogdata";
async function getBlogData() {
  const domain = 'jschamps.com';
  const group = 'layout';

  const res = await fetch(
    `http://localhost:3001/api/cms/blogs-by-domain?domain=jschamps.com`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error('Failed to fetch layout data');

  const response  = await res.json();
  // console.log(response ,"blog message");
  return response .data ||[]
}
export default async function BlogSection() {
   const data = await getBlogData();
  //  console.log(data,"vikas vlog")
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Insights & Stories
          </h2>
          <p className="text-gray-600">
            Explore our latest articles, design insights, and business ideas
            crafted to inspire and inform.
          </p>
        </div>

        {/* Grid */}
         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {data.map((blog: any) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div> 

      </div>
    </section>
  );
}
