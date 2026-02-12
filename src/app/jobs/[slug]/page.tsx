import ReactMarkdown from "react-markdown";

/* ================= FETCH JOB ================= */

async function getJobBySlug(slug: string) {
  console.log("Fetching job with slug:", slug);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch job");
  }

  const json = await res.json();

  if (!json?.data) {
    throw new Error("Job not found");
  }

  return json.data;
}


/* ================= PAGE ================= */

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log("PARAMS OBJECT:", slug);

  const job = await getJobBySlug(slug);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <JobHeader job={job} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2">
          <JobDescription job={job} />
        </div>

        <ApplyBox job={job} />
      </div>
    </div>
  );
}

/* ================= JOB HEADER ================= */

function JobHeader({ job }: any) {
  return (
    <div className="border rounded-xl p-5 bg-white">
      <h1 className="text-2xl font-bold">{job.title}</h1>

      <p className="text-gray-700 mt-1">
        {job.company} • {job.location}
      </p>

      <div className="flex flex-wrap gap-2 mt-4 text-sm">
        <span className="px-3 py-1 bg-gray-100 rounded-full">
          {job.jobType || "Job"}
        </span>

        {job.isRemote && (
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
            Remote
          </span>
        )}
      </div>
    </div>
  );
}

/* ================= JOB DESCRIPTION ================= */

function JobDescription({ job }: any) {
  return (
    <div className="border rounded-xl p-5 bg-white">
      <h2 className="text-lg font-semibold mb-3">Job Description</h2>

      <div className="text-sm text-gray-700 leading-6">
        <ReactMarkdown
          components={{
            h2: ({ children }) => (
              <h2 className="mt-4 mb-1 font-semibold text-base">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-4 mb-1 font-semibold text-base">{children}</h3>
            ),
            p: ({ children }) => <p className="mb-2">{children}</p>,
            ul: ({ children }) => (
              <ul className="list-disc pl-5 my-2">{children}</ul>
            ),
            li: ({ children }) => <li className="mb-1">{children}</li>,
          }}
        >
          {job.description}
        </ReactMarkdown>
      </div>
    </div>
  );
}

/* ================= APPLY BOX ================= */

function ApplyBox({ job }: any) {
  const externalApplyLink = job.jobUrlDirect || job.jobUrl;

  return (
    <div className="border rounded-xl p-5 bg-white h-fit sticky top-4 text-center">
  <h3 className="text-lg font-semibold mb-4">
    Apply for this job
  </h3>

  {externalApplyLink && (
    <a
      href={externalApplyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-block
        w-full
        bg-gradient-to-r 
        from-blue-500 
        to-blue-700 
        text-white 
        py-2.5 
        rounded-lg 
        font-medium
        shadow-md
        transition-all 
        duration-300 
        hover:from-blue-600 
        hover:to-blue-800 
        hover:shadow-lg 
        active:scale-95
      "
    >
      Apply
    </a>
  )}
</div>

  );
}
