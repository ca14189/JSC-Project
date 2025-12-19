import { notFound } from "next/navigation";
import Link from "next/link";
import { FaBuilding, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

export default async function JobDetails(props: any) {

  const { slug } = await props.params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_L}/api/cms/jobs/route/${slug}`,
    { cache: "no-store" }
  );


  if (!res.ok) return notFound();

  const json = await res.json();
  const job = json.data;

  if (!job) return notFound();


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8 space-y-6">
        <Link href="/fullstack-developer-job" className="text-blue-600">
          ← Back to job search
        </Link>

        <h1 className="text-2xl font-bold">{job.title}</h1>

        <div className="text-gray-700 flex flex-wrap gap-3 text-sm">
          <span className="flex items-center gap-1">
            <FaBuilding /> {job.company}
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt /> {job.location}
          </span>
          <span className="flex items-center gap-1">
            <MdOutlineWork /> {job.type}
          </span>
          <span className="flex items-center gap-1">
            <FaRegClock /> Posted {job.postedDaysAgo}d ago
          </span>
        </div>

        <button className="btn btn-lg btn-bold font-bold">
          Apply Now
        </button>

        <section>
          <h2 className="font-semibold text-lg mb-2">About the job</h2>
          <p className="text-gray-700">{job.description}</p>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Responsibilities</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {job.responsibilities.map((r: any, i: number) => (
              <li key={i}>{r.text}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((s: string) => (
              <span
                key={s}
                className="border rounded-full px-3 py-1 text-sm text-gray-800"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Experience</h3>
          <p className="text-gray-700">{job.experience}</p>
        </section>
      </div>
    </div>
  );
}
