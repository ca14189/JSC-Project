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

/* ================= LINKEDIN URLS ================= */

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

/* ================= CARD UI ================= */

const TeamGrid = ({ data }: { data: Team[] }) => (
  <div className="flex flex-wrap gap-8 mt-10 justify-center">
    {data.map((m, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
        whileHover={{ scale: 1.04 }}
        className="group w-72 max-w-sm rounded-3xl overflow-hidden 
        bg-white/70 backdrop-blur-lg border border-gray-200 
        shadow-md hover:shadow-2xl transition-all duration-300"
      >
        {/* Image */}
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src={m.image}
            alt={m.name}
            fill
            className="object-cover object-top group-hover:scale-110 transition duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
        </div>

        {/* Content */}
        <div className="p-6 text-left">
          <h3 className="text-2xl font-bold text-gray-900">
            {m.name}
          </h3>

          <p className="text-sm font-semibold text-brandlight mt-1">
            {m.role}
          </p>

          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            {m.description}
          </p>

          {/* Linkedin */}
          {m.linkedin && (
            <a
              href={m.linkedin}
              target="_blank"
              className="mt-5 inline-flex items-center gap-2 
              px-4 py-2 rounded-full text-sm font-medium
              bg-brandlight text-white shadow-md
              hover:bg-black hover:scale-105 transition"
            >
              <FaLinkedinIn size={16} />
              LinkedIn
            </a>
          )}
        </div>
      </motion.div>
    ))}
  </div>
);

/* ================= COMPONENT ================= */

const OurTeam: React.FC<OurTeamProps> = ({ contents }) => {
  if (!contents || contents.length === 0)
    return <p className="text-center py-20">Contents not found</p>;

  /* ---------- HERO TEXT ---------- */
  const welcomeHeading = contents.find((c) => c.type === "text")?.data;
  const welcomePara = contents.find(
    (c, i) => c.type === "text" && i > 0
  )?.data;

  /* ---------- HELPER ---------- */
  const extractTeam = (
    startIndex: number,
    count: number,
    linkedinArr: string[]
  ): Team[] => {
    const team: Team[] = [];
    let li = 0;
    let i = startIndex;

    while (team.length < count && i < contents.length) {
      if (contents[i].type === "media") {
        team.push({
          image: contents[i].media_ref || "/images/dummyUser.png",
          name: contents[i + 1]?.data || "",
          role: contents[i + 2]?.data || "",
          description: contents[i + 3]?.data || "",
          linkedin: linkedinArr[li] || "#",
        });
        li++;
        i += 4;
      } else {
        i++;
      }
    }
    return team;
  };

  /* ---------- SECTIONS ---------- */
  const team1 = extractTeam(3, 2, team1Linkedin);
  const team2 = extractTeam(11, 7, team2Linkedin);
  const team3 = extractTeam(39, 2, team3Linkedin);

  return (
    <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-gray-900"
        >
          {welcomeHeading}
        </motion.h2>

        <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
          {welcomePara}
        </p>

        {/* Sections */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-brandlight">
            Leadership Team
          </h3>
          <TeamGrid data={team1} />
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-bold text-brandlight">
            AI/ML Development Team
          </h3>
          <TeamGrid data={team2} />
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-bold text-brandlight">
            Admin & HR Team
          </h3>
          <TeamGrid data={team3} />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
