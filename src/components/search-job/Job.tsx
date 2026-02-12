// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   FaSearch,
//   FaMapMarkerAlt,
//   FaRegClock,
//   FaRegBookmark,
//   FaBookmark,
// } from "react-icons/fa";
// import { MdOutlineWork } from "react-icons/md";
// // import { createJobSlug } from "@/utils/slugify";

// export default function SearchJobPage() {
//   const [jobs, setJobs] = useState<any[]>([]);
//   const [filtered, setFiltered] = useState<any[]>([]);
//   const [query, setQuery] = useState("");
//   const [location, setLocation] = useState("");
//   const [type, setType] = useState("");
//   const [experience, setExperience] = useState("");
//   const [saved, setSaved] = useState<Record<string, boolean>>({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchJobs() {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs`);
//         console.log("Fetch response status ::::", res.status);
//         const json = await res.json();
//         console.log("Fetched jobs :", json.data);
//         setJobs(json.data);
//         setFiltered(json.data);
//       } catch (err) {
//         console.error("Error fetching jobs:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchJobs();
//   }, []);

//  const handleSearch = async () => {
//   // ✅ If nothing selected, show all jobs
//   if (!query && !location && !type && !experience) {
//     setFiltered(jobs);
//     return;
//   }

//   setLoading(true);

//   try {
//     const params = new URLSearchParams();

//     if (query) params.append("keyword", query);
//     if (location) params.append("location", location);
//     // if (type) params.append("type", type);
//     if (type && type !== "Type") {
//   params.append("type", type);
// }

//     if (experience) params.append("experience", experience);

//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/search?${params.toString()}`
//     );

//     const json = await res.json();

//     setFiltered(json.data || []);
//   } catch (err) {
//     console.error("Search error :::", err);
//   } finally {
//     setLoading(false);
//   }
// };
// const handleCategoryChange = (category: string) => {
//   setQuery(category);

//   if (!category) {
//     setFiltered(jobs);
//     return;
//   }

//   const result = jobs.filter((job) =>
//     job.title.toLowerCase().includes(category.toLowerCase())
//   );

//   setFiltered(result);
// };

//   function getInitials(name: string) {
//     const parts = name.split(" ");
//     return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-10">
//       {/* Search Filters */}
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="bg-white rounded-2xl shadow p-5 md:p-6 border">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
//             <div className="md:col-span-5 flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-3 py-2">
//   <MdOutlineWork className="text-gray-500" />
//   <select
//     value={query}
//     onChange={(e) => handleCategoryChange(e.target.value)}

//     className="w-full bg-transparent outline-none rounded-xl text-sm text-gray-800"
//   >
//     <option value="">Select Job Category</option>
//     <option value="Frontend Developer">Frontend Developer</option>
//     <option value="Backend Developer">Backend Developer</option>
//     <option value="Full Stack Developer">Full Stack Developer</option>
//     <option value="React Developer">React Developer</option>
//     <option value="Node.js Developer">Node.js Developer</option>
//     <option value="AI Full stack Developer">AI Full stack Developer</option>
//   </select>
// </div>

//             <div className="md:col-span-5 flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-3 py-2">
//               <FaMapMarkerAlt className="text-gray-500" />
//               <input
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 placeholder="Location (e.g., Delhi, Remote)"
//                 className="w-full bg-transparent outline-none rounded-xl text-sm text-gray-800 placeholder-gray-500"
//               />
//             </div>

//             <div className="md:col-span-2 grid grid-cols-2 gap-2">
//               <select
//                 value={type}
//                 onChange={(e) => setType(e.target.value)}
//                 className="rounded-xl border bg-white px-3 py-2 text-sm"
//               >
//                 <option value="">Type</option>
//                 <option>Full-Time</option>
//                 <option>Part-Time</option>
//                 <option>Contract</option>
//                 <option>Internship</option>
//                 <option>Remote</option>
//               </select>

//               <select
//                 value={experience}
//                 onChange={(e) => setExperience(e.target.value)}
//                 className="rounded-xl border bg-white px-3 py-2 text-sm"
//               >
//                 <option value="">Experience</option>
//                 <option>Fresher</option>
//                 <option>0-1 years</option>
//                 <option>1-2 years</option>
//                 <option>1-3 years</option>
//                 <option>2-3 years</option>
//                 <option>3-4 years</option>
//                 <option>2-4 years</option>
//                 <option>5+ years</option>
//               </select>
//             </div>
//           </div>

//           <div className="flex justify-center md:justify-end mt-5 gap-3">
//             <button
//               onClick={handleSearch}
//               className="btn btn-lg btn-bold font-bold flex items-center gap-2 px-6 py-3"
//             >
//               <FaSearch className="w-5 h-5" />
//               Search
//             </button>

//             <button
//   onClick={() => {
//     setQuery("");
//     setLocation("");
//     setType("");
//     setExperience("");
//     setFiltered(jobs); // ✅ restore all jobs
//   }}
//   className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-gray-100 transition"
// >
//   Clear
// </button>

//           </div>
//         </div>
//       </div>

//       {/* Job Cards */}
//       <div className="max-w-7xl mx-auto mt-8 px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[1fr]">
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             filtered.map((job) => {
//               const isSaved = !!saved[job._id];
//               // const slug = createJobSlug(job);

//               return (
//                 <Link
//                  href={`/fullstack-developer-job/${job.route}`} key={job._id}
//                   className="block group h-full"
//                 >
//                   <div className="bg-white h-full flex flex-col justify-between rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-200 p-6">
//                     <div>
//                       <div className="flex items-start justify-between">
//                         <div className="flex items-center gap-3">
//                           <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-700 border">
//                             {getInitials(job.company)}
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
//                               {job.title}
//                             </h3>
//                             <p className="text-sm text-gray-600">{job.company}</p>
//                           </div>
//                         </div>

//                         <button
//                           className="text-gray-600 hover:text-blue-600"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setSaved((s) => ({
//                               ...s,
//                               [job._id]: !s[job._id],
//                             }));
//                           }}
//                         >
//                           {isSaved ? <FaBookmark /> : <FaRegBookmark />}
//                         </button>
//                       </div>

//                       <div className="mt-3 text-sm text-gray-600 space-y-1">
//                         <div className="flex items-center gap-2">
//                           <FaMapMarkerAlt /> {job.location}
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <MdOutlineWork /> {job.type}
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <FaRegClock /> Posted {
//   (() => {
//     const days = Math.floor(
//       (new Date() - new Date(job.datePosted)) / (1000 * 60 * 60 * 24)
//     );

//     if (days === 0) return "Today";
//     if (days === 1) return "Yesterday";

//     if (days < 30) return `${days} days ago`;

//     const months = Math.floor(days / 30);
//     if (days < 365) {
//       return months === 1 ? "1 month ago" : `${months} months ago`;
//     }

//     const years = Math.floor(days / 365);
//     return years === 1 ? "1 year ago" : `${years} years ago`;
//   })()
// }

//                         </div>
//                       </div>

//                       <div className="mt-3 flex flex-wrap gap-2">
//                         {job.skills.slice(0, 3).map((sk: string) => (
//                           <span
//                             key={sk}
//                             className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-700 bg-gray-50"
//                           >
//                             {sk}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               );
//             })
//           )}
//         </div>

//         {!loading && filtered.length === 0 && (
//           <div className="text-center mt-10 text-gray-500 text-sm">
//             No jobs found. Try adjusting your filters.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
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

export default function SearchJobPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [experience, setExperience] = useState("");
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [allCities, setAllCities] = useState<string[]>([]);
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: "India",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllCities(data.data || []);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (location.length < 2) {
      setFilteredCities([]);
      return;
    }

    const filtered = allCities.filter((city) =>
      city.toLowerCase().startsWith(location.toLowerCase()),
    );

    setFilteredCities(filtered.slice(0, 8)); // limit results
  }, [location, allCities]);

  useEffect(() => {
  let result = [...jobs];

  // Category Filter
  if (query) {
    const normalizedCategory = query.toLowerCase();
    result = result.filter((job) => {
      const title = job.title?.toLowerCase() || "";
      const skills = Array.isArray(job.skills)
        ? job.skills.join(" ").toLowerCase()
        : "";
      return (
        title.includes(normalizedCategory) ||
        skills.includes(normalizedCategory)
      );
    });
  }

  // Location Filter
  if (location) {
    result = result.filter((job) =>
      job.location?.toLowerCase().startsWith(location.toLowerCase())
    );
  }

  // Type Filter
  if (type) {
    result = result.filter((job) =>
      job.jobType?.toLowerCase() === type.toLowerCase()
    );
  }

  setFiltered(result);
}, [query, location, type, jobs]);


  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch( `${process.env.NEXT_PUBLIC_BASE_URL}/jobs`);
        const json = await res.json();
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

  // ✅ CHANGED: Improved category filtering logic (title + skills, flexible match)
  const handleCategoryChange = (category: string) => {
    setQuery(category);

    if (!category) {
      setFiltered(jobs);
      return;
    }

    const normalizedCategory = category.toLowerCase();

    const result = jobs.filter((job) => {
      const title = job.title?.toLowerCase() || "";
      const skills = Array.isArray(job.skills)
        ? job.skills.join(" ").toLowerCase()
        : "";

      return (
        title.includes(normalizedCategory) ||
        skills.includes(normalizedCategory)
      );
    });

    setFiltered(result);
  };

  const handleSearch = async () => {
    // keep backend search untouched
    if (!query && !location && !type && !experience) {
      setFiltered(jobs);
      return;
    }

    setLoading(false);

    try {
      const params = new URLSearchParams();

      if (query) params.append("keyword", query);
      if (location) params.append("location", location);
      if (type) {
        const normalizedType = type.toLowerCase().replace(/[\s-]/g, "");
        params.append("type", normalizedType);
      }

      if (experience) params.append("experience", experience);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/search?${params.toString()}`,
      );

      const json = await res.json();
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
      <div className="bg-white rounded-2xl shadow-md p-6 border">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 items-center">

          {/* Job Category */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 focus-within:ring-2 focus-within:ring-orange-400 transition">
              <MdOutlineWork className="text-gray-500 text-lg" />
              <select
                value={query}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full bg-transparent outline-none text-sm text-gray-800"
              >
                <option value="">Select Job Category</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="React Developer">React Developer</option>
                <option value="Node.js Developer">Node.js Developer</option>
                <option value="AI Full stack Developer">AI Full stack Developer</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-3 relative">
            <div className="flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 focus-within:ring-2 focus-within:ring-orange-400 transition">
              <FaMapMarkerAlt className="text-gray-500 text-lg" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location (e.g., Delhi)"
                className="w-full bg-transparent outline-none text-sm text-gray-800"
              />
            </div>

            {filteredCities.length > 0 && (
              <ul className="absolute z-50 mt-2 w-full rounded-xl border bg-white shadow-lg max-h-48 overflow-auto">
                {filteredCities.map((city, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-orange-50 text-sm"
                    onClick={() => {
                      setLocation(city);
                      setFilteredCities([]);
                    }}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Type */}
          <div className="md:col-span-2">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:ring-2 focus:ring-orange-400 transition"
            >
              <option value="">Type</option>
              <option value="fulltime">Full-Time</option>
              <option value="parttime">Part-Time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
              <option value="remote">Remote</option>
            </select>
          </div>

          {/* Clear Button */}
          <div className="md:col-span-2">
            <button
              onClick={() => {
                setQuery("");
                setLocation("");
                setType("");
                setExperience("");
                setFiltered(jobs);
              }}
              className="w-full rounded-xl bg-orange-500 text-white px-4 py-3 text-sm font-semibold hover:bg-orange-600 transition-all duration-200 shadow-sm"
            >
              Clear Filters
            </button>
          </div>

        </div>
      </div>
    </div>

    {/* Job Cards */}
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[1fr]">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filtered.map((job) => {
            const isSaved = !!saved[job.slug];

            return (
              <Link
                href={`/jobs/${job.slug}`}
                key={job.slug || job._id}
                className="block group h-full"
              >
                <div className="bg-white h-full flex flex-col justify-between rounded-2xl border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 p-6">

                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-700 border">
                          {getInitials(job.company)}
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition">
                            {job.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {job.company}
                          </p>
                        </div>
                      </div>

                      <button
                        className="text-gray-600 hover:text-orange-600 transition"
                        onClick={(e) => {
                          e.preventDefault();
                          setSaved((s) => ({
                            ...s,
                            [job.slug]: !s[job.slug],
                          }));
                        }}
                      >
                        {isSaved ? <FaBookmark /> : <FaRegBookmark />}
                      </button>
                    </div>

                    <div className="mt-4 text-sm text-gray-600 space-y-2">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt /> {job.location}
                      </div>

                      <div className="flex items-center gap-2">
                        <MdOutlineWork />
                        {job.jobType || "Fulltime"}
                      </div>

                      <div className="flex items-center gap-2">
                        <FaRegClock />
                        Posted{" "}
                        {(() => {
                          if (!job.datePosted) return "Recently";

                          const days = Math.floor(
                            (new Date().getTime() -
                              new Date(job.datePosted).getTime()) /
                              (1000 * 60 * 60 * 24)
                          );

                          if (isNaN(days) || days < 0) return "Recently";
                          if (days === 0) return "Today";
                          if (days === 1) return "Yesterday";
                          if (days < 30) return `${days} days ago`;

                          return "30+ days ago";
                        })()}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.skills?.slice(0, 3).map((sk: string, index: number) => (
                        <span
                          key={`${sk}-${index}`}
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
        <div className="text-center mt-12 text-gray-500 text-sm">
          No jobs found. Try adjusting your filters.
        </div>
      )}
    </div>
  </div>
)
};
