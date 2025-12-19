"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaRegClock,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { createJobSlug } from "@/utils/slugify";

export default function SearchJobPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [experience, setExperience] = useState("");
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_L}/api/cms/jobs`);
        console.log("Fetch response status ::::", res.status);
        const json = await res.json();
        console.log("Fetched jobs :", json.data);
        setJobs(json.data);
        setFiltered(json.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);


  const handleSearch = async () => {
  setLoading(true);

  try {
    const params = new URLSearchParams();

    if (query) params.append("keyword", query);
    if (location) params.append("location", location);
    if (type) params.append("type", type);
    if (experience) params.append("experience", experience);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_L}/api/cms/jobs/search?${params.toString()}`
    );
    console.log("Search response status :::", res.status);
    const json = await res.json();

    console.log("Search results :::", json.data);

    setFiltered(json.data || []);
  } catch (err) {
    console.error("Search error :::", err);
  } finally {
    setLoading(false);
  }
};


  function getInitials(name: string) {
    const parts = name.split(" ");
    return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* Search Filters */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow p-5 md:p-6 border">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-5 flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-3 py-2">
              <FaSearch className="text-gray-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jobs, companies or skills"
                className="w-full bg-transparent outline-none rounded-xl text-sm text-gray-800 placeholder-gray-500"
              />
            </div>

            <div className="md:col-span-5 flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-3 py-2">
              <FaMapMarkerAlt className="text-gray-500" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location (e.g., Delhi, Remote)"
                className="w-full bg-transparent outline-none rounded-xl text-sm text-gray-800 placeholder-gray-500"
              />
            </div>

            <div className="md:col-span-2 grid grid-cols-2 gap-2">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="rounded-xl border bg-white px-3 py-2 text-sm"
              >
                <option value="">Type</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Contract</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>

              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="rounded-xl border bg-white px-3 py-2 text-sm"
              >
                <option value="">Experience</option>
                <option>Fresher</option>
                <option>0-1 years</option>
                <option>1-2 years</option>
                <option>1-3 years</option>
                <option>2-3 years</option>
                <option>3-4 years</option>
                <option>2-4 years</option>
                <option>5+ years</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center md:justify-end mt-5 gap-3">
            <button
              onClick={handleSearch}
              className="btn btn-lg btn-bold font-bold flex items-center gap-2 px-6 py-3"
            >
              <FaSearch className="w-5 h-5" />
              Search
            </button>

            <button
              onClick={() => {
                setQuery("");
                setLocation("");
                setType("");
                setExperience("");
                handleSearch();
              }}
              className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-gray-100 transition"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Job Cards */}
      <div className="max-w-7xl mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[1fr]">
          {loading ? (
            <p>Loading...</p>
          ) : (
            filtered.map((job) => {
              const isSaved = !!saved[job._id];
              // const slug = createJobSlug(job);

              return (
                <Link
                 href={`/fullstack-developer-job/${job.route}`} key={job._id}
                  className="block group h-full"
                >
                  <div className="bg-white h-full flex flex-col justify-between rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-200 p-6">
                    <div>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-700 border">
                            {getInitials(job.company)}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                              {job.title}
                            </h3>
                            <p className="text-sm text-gray-600">{job.company}</p>
                          </div>
                        </div>

                        <button
                          className="text-gray-600 hover:text-blue-600"
                          onClick={(e) => {
                            e.preventDefault();
                            setSaved((s) => ({
                              ...s,
                              [job._id]: !s[job._id],
                            }));
                          }}
                        >
                          {isSaved ? <FaBookmark /> : <FaRegBookmark />}
                        </button>
                      </div>

                      <div className="mt-3 text-sm text-gray-600 space-y-1">
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt /> {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <MdOutlineWork /> {job.type}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaRegClock /> Posted {job.postedDaysAgo}d ago
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {job.skills.slice(0, 3).map((sk: string) => (
                          <span
                            key={sk}
                            className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-700 bg-gray-50"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>

        {!loading && filtered.length === 0 && (
          <div className="text-center mt-10 text-gray-500 text-sm">
            No jobs found. Try adjusting your filters.
          </div>
        )}
      </div>
    </div>
  );
}
