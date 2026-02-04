// "use client";

// import Image from "next/image";
// import { Linkedin, Mail } from "lucide-react";

// /* ================= TYPES ================= */

// type ContentItem = {
//   type: "text" | "media";
//   data?: string;
//   media_ref?: string;
// };

// interface OurTeamProps {
//   contents: ContentItem[];
// }

// interface Team {
//   name: string;
//   role: string;
//   image: string;
//   description: string;
//   linkedin: string;
// }

// /* ================= LINKEDIN URLS ================= */

// const team1Linkedin = [
//   "https://www.linkedin.com/in/jschamps/",
//   "https://www.linkedin.com/in/jschamps/",
// ];

// const team2Linkedin = [
//   "https://www.linkedin.com/in/team3-member1/",
//   "https://www.linkedin.com/in/suryanshu-pal/",
//   "https://www.linkedin.com/in/team3-member2/",
//   "https://www.linkedin.com/in/prashant-kumar-3742b227b",
//   "https://www.linkedin.com/in/pradip-kumar-madheshiya-pradip",
//   "https://www.linkedin.com/in/adarsh-bhargav-7645b8332/",
//   "https://www.linkedin.com/in/ankur-jaiswal-69a40a397/",
// ];

// const team3Linkedin = [
//   "https://www.linkedin.com/in/nitesh-gupta-213479387/",
//   "https://www.linkedin.com/in/sonali-jschamps/",
// ];

// type TeamMember = {
//   name: string;
//   role: string;
//   image: string;
//   bio: string;
//   linkedin?: string;
//   email?: string;
// };

// const team1: TeamMember[] = [
//   {
//     name: "Rajneesh Srivastav",
//     role: "Co Founder",
//     image: "/images/dummyUser.png",
//     bio: "A rare blend of deep engineering and clear product vision. Turns complex AI systems into scalable, real-world solutions. The kind of co-founder every serious tech venture needs.",
//     linkedin: "#",
//     email: "mailto:hello@example.com",
//   },
//   {
//     name: "Rajneesh Srivastav",
//     role: "Co Founder",
//     image: "/images/dummyUser.png",
//     bio: "Focused on building meaningful products that create long-term impact through innovation and strong values.",
//     linkedin: "#",
//     email: "mailto:hello@example.com",
//   },
// ];

// const team2: TeamMember[] = [
//   {
//     name: "Sarthak Deb",
//     role: "Full Stack AI Engineer",
//     image: "/images/dummyUser.png",
//     bio: "Focused on building meaningful products that create long-term impact through innovation and strong values.",
//     linkedin: "#",
//     email: "mailto:hello@example.com",
//   },
//   {
//     name: "Suryanshu Pal",
//     role: "Full Stack AI Engineer",
//     image: "/images/dummyUser.png",
//     bio: "Drives growth by connecting people with solutions that truly improve how businesses operate.",
//     linkedin: "#",
//     email: "mailto:hello@example.com",
//   },
//   {
//     name: "Siddhant Kumar",
//     role: "Full Stack AI Engineer",
//     image: "/images/dummyUser.png",
//     bio: "Focused on building meaningful products that create long-term impact through innovation and strong values.",
//     linkedin: "#",
//     email: "mailto:hello@example.com",
//   },
//   {
//     name: "Prashant Kumar",
//     role: "DevSecOps Engineer",
//     image: "/images/dummyUser.png",
//     bio: "Drives growth by connecting people with solutions that truly improve how businesses operate.",
//     linkedin: "#",
//     email: "mailto:hello@example.com",
//   },
//   {
//     name: "Pradip Madheshiya",
//     role: "Full Stack AI Engineer",
//     image: "/images/dummyUser.png",
//     bio: "Focused on building meaningful products that create long-term impact through innovation and strong values.",
//     linkedin: "#",
//     email: "mailto:pradip.jschamp@gmail.com",
//   },
//   {
//     name: "Adarsh Bhargav",
//     role: "Full Stack AI Engineer",
//     image: "/images/dummyUser.png",
//     bio: "Drives growth by connecting people with solutions that truly improve how businesses operate.",
//     linkedin: "#",
//     email: "mailto:hello@example.com",
//   },
//   {
//     name: "Ankur Jaiswal",
//     role: "Full Stack AI Engineer",
//     image: "/images/dummyUser.png",
//     bio: "Focused on building meaningful products that create long-term impact through innovation and strong values.",
//     linkedin: "#",
//     email: "mailto:hello@example.com",
//   },
// ];

// const team3: TeamMember[] = [
//   {
//     name: "Sonali Arya",
//     role: "HR/Admin Manager",
//     image: "/images/dummyUser.png",
//     bio: "Focused on building meaningful products that create long-term impact through innovation and strong values.",
//     linkedin: "#",
//     email: "mailto:hello@example.com",
//   },
//   {
//     name: "Nitesh Gupta",
//     role: "UX Lead",
//     image: "/images/dummyUser.png",
//     bio: "Drives growth by connecting people with solutions that truly improve how businesses operate.",
//     linkedin: "#",
//     email: "mailto:hello@example.com",
//   },
// ];

// export default function TeamSection() {
//   return (
//     <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <h2 className="text-4xl font-bold tracking-tight text-slate-900">
//             Meet the People Behind the Vision
//           </h2>
//           <p className="mt-4 text-slate-600 text-lg">
//             A passionate team dedicated to building smart, reliable, and
//             future-ready solutions for modern businesses.
//           </p>
//         </div>

//         <h3 className="text-center text-2xl font-semibold text-brandlight">Leadership Team</h3>

//         {/* Team Grid */}
//         <div className="flex justify-center flex-wrap gap-4 mt-6">
//           {team1.map((member, index) => (
//             <div
//               key={index}
//               className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-72"
//             >
//               {/* Image */}
//               <div className="relative h-72 w-full overflow-hidden">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
//               </div>

//               {/* Content */}
//               <div className="p-6 relative">
//                 <h3 className="text-xl font-semibold text-slate-900">
//                   {member.name}
//                 </h3>
//                 <p className="text-brandlight font-semibold mt-1">
//                   {member.role}
//                 </p>

//                 <p className="mt-4 text-slate-600 leading-relaxed text-sm">
//                   {member.bio}
//                 </p>

//                 {/* Actions */}
//                 <div className="mt-6 flex items-center gap-4">
//                   {member.linkedin && (
//                     <a
//                       href={member.linkedin}
//                       className="p-2 rounded-full bg-slate-100 hover:bg-brandlight hover:text-white transition"
//                     >
//                       <Linkedin size={18} />
//                     </a>
//                   )}
//                   {member.email && (
//                     <a
//                       href={member.email}
//                       className="p-2 rounded-full bg-slate-100 hover:bg-brandlight hover:text-white transition"
//                     >
//                       <Mail size={18} />
//                     </a>
//                   )}
//                 </div>
//               </div>

//               {/* Accent line */}
//               <div className="absolute bottom-0 left-0 h-1 w-0 bg-brandlight group-hover:w-full transition-all duration-500" />
//             </div>
//           ))}
//         </div>

//         <h3 className="text-center text-2xl font-semibold text-brandlight mt-16">AI/ML Development Team</h3>

//         {/* Team Grid */}
//         <div className="flex justify-center flex-wrap gap-4 mt-6">
//           {team2.map((member, index) => (
//             <div
//               key={index}
//               className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-72"
//             >
//               {/* Image */}
//               <div className="relative h-72 w-full overflow-hidden">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
//               </div>

//               {/* Content */}
//               <div className="p-6 relative">
//                 <h3 className="text-xl font-semibold text-slate-900">
//                   {member.name}
//                 </h3>
//                 <p className="text-brandlight font-semibold mt-1">
//                   {member.role}
//                 </p>

//                 <p className="mt-4 text-slate-600 leading-relaxed text-sm">
//                   {member.bio}
//                 </p>

//                 {/* Actions */}
//                 <div className="mt-6 flex items-center gap-4">
//                   {member.linkedin && (
//                     <a
//                       href={member.linkedin}
//                       className="p-2 rounded-full bg-slate-100 hover:bg-brandlight hover:text-white transition"
//                     >
//                       <Linkedin size={18} />
//                     </a>
//                   )}
//                   {member.email && (
//                     <a
//                       href={member.email}
//                       className="p-2 rounded-full bg-slate-100 hover:bg-brandlight hover:text-white transition"
//                     >
//                       <Mail size={18} />
//                     </a>
//                   )}
//                 </div>
//               </div>

//               {/* Accent line */}
//               <div className="absolute bottom-0 left-0 h-1 w-0 bg-brandlight group-hover:w-full transition-all duration-500" />
//             </div>
//           ))}
//         </div>

//         <h3 className="text-center text-2xl font-semibold text-brandlight mt-16">Admin and HR Team</h3>

//         {/* Team Grid */}
//         <div className="flex justify-center flex-wrap gap-4 mt-6">
//           {team3.map((member, index) => (
//             <div
//               key={index}
//               className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-72"
//             >
//               {/* Image */}
//               <div className="relative h-72 w-full overflow-hidden">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
//               </div>

//               {/* Content */}
//               <div className="p-6 relative">
//                 <h3 className="text-xl font-semibold text-slate-900">
//                   {member.name}
//                 </h3>
//                 <p className="text-brandlight font-semibold mt-1">
//                   {member.role}
//                 </p>

//                 <p className="mt-4 text-slate-600 leading-relaxed text-sm">
//                   {member.bio}
//                 </p>

//                 {/* Actions */}
//                 <div className="mt-6 flex items-center gap-4">
//                   {member.linkedin && (
//                     <a
//                       href={member.linkedin}
//                       className="p-2 rounded-full bg-slate-100 hover:bg-brandlight hover:text-white transition"
//                     >
//                       <Linkedin size={18} />
//                     </a>
//                   )}
//                   {member.email && (
//                     <a
//                       href={member.email}
//                       className="p-2 rounded-full bg-slate-100 hover:bg-brandlight hover:text-white transition"
//                     >
//                       <Mail size={18} />
//                     </a>
//                   )}
//                 </div>
//               </div>

//               {/* Accent line */}
//               <div className="absolute bottom-0 left-0 h-1 w-0 bg-brandlight group-hover:w-full transition-all duration-500" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

/* ================= TYPES ================= */

type ContentItem = {
  type: "text" | "media";
  data?: string;
  media_ref?: string;
};

interface OurTeamProps {
  contents: ContentItem[];
}

interface Team {
  name: string;
  role: string;
  image: string;
  description: string;
  linkedin: string;
}

/* ================= LINKEDIN ================= */

const team1Linkedin = [
  "https://www.linkedin.com/in/jschamps/",
  "https://www.linkedin.com/in/pradip-madheshiya/",
];

const team2Linkedin = [
  "https://www.linkedin.com/in/adarsh-bhargav-7645b8332/",
  "https://www.linkedin.com/in/pradip-kumar-madheshiya-pradip",
  "https://www.linkedin.com/in/ankur-jaiswal-69a40a397/",
  "https://www.linkedin.com/in/team3-member1/",
  "https://www.linkedin.com/in/suryanshu-pal/",
  "https://www.linkedin.com/in/team3-member2/",
  "https://www.linkedin.com/in/prashant-kumar-3742b227b",
];

const team3Linkedin = [
  "https://www.linkedin.com/in/nitesh-gupta-213479387/",
  "https://www.linkedin.com/in/sonali-jschamps/",
];

/* ================= GRID ================= */

const TeamGrid = ({ data }: { data: Team[] }) => (
  <div className="flex justify-center flex-wrap gap-6 mt-8">
    {data.map((member, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        className="bg-white w-72 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition overflow-hidden"
      >
        <div className="relative h-72 w-full">
          <Image
            src={member.image || "/images/dummyUser.png"}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-brandlight font-semibold">{member.role}</p>
          <p className="mt-2 text-sm text-gray-600">{member.description}</p>

          <a
            href={member.linkedin}
            target="_blank"
            className="inline-flex mt-3 w-9 h-9 items-center justify-center rounded-full bg-gray-100 hover:bg-brandlight hover:text-white"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </motion.div>
    ))}
  </div>
);

/* ================= COMPONENT ================= */

const OurTeam: React.FC<OurTeamProps> = ({ contents }) => {
  if (!contents?.length) return null;

  const welcomeHeading = contents[0]?.data;
  const welcomePara = contents[1]?.data;

  const teamOneName = contents[2]?.data;
  const teamTwoName = contents[11]?.data;
  const teamThreeName = contents[40]?.data; // ✅ fixed

  const buildTeam = (start: number, count: number, links: string[]) => {
    const team: Team[] = [];
    let linkIndex = 0;

    for (let i = start; team.length < count; i += 4) {
      if (!contents[i + 1]?.data) break;

      team.push({
        image: contents[i]?.media_ref || "/images/dummyUser.png",
        name: contents[i + 1]?.data || "",
        role: contents[i + 2]?.data || "",
        description: contents[i + 3]?.data || "",
        linkedin: links[linkIndex] || "#",
      });

      linkIndex++;
    }
    return team;
  };

  const team1 = buildTeam(3, 2, team1Linkedin);     // ✅ ok
  const team2 = buildTeam(12, 7, team2Linkedin);    // 🔥 FIXED
  const team3 = buildTeam(41, 2, team3Linkedin);    // 🔥 FIXED

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold">{welcomeHeading}</h2>
        <p className="mt-4 text-gray-600">{welcomePara}</p>

        <h3 className="mt-12 text-2xl text-brandlight">{teamOneName}</h3>
        <TeamGrid data={team1} />

        <h3 className="mt-16 text-2xl text-brandlight">{teamTwoName}</h3>
        <TeamGrid data={team2} />

        <h3 className="mt-16 text-2xl text-brandlight">{teamThreeName}</h3>
        <TeamGrid data={team3} />
      </div>
    </section>
  );
};

export default OurTeam;
