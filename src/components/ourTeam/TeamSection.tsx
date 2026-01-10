"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
};

const team1: TeamMember[] = [
  {
    name: "Rajneesh Srivastav",
    role: "Co Founder",
    image: "/images/dummyUser.png",
    bio: "Focused on building meaningful products that create long-term impact through innovation and strong values.",
    linkedin: "#",
    email: "mailto:hello@example.com",
  },
  {
    name: "Rajneesh Srivastav",
    role: "Co Founder",
    image: "/images/dummyUser.png",
    bio: "Focused on building meaningful products that create long-term impact through innovation and strong values.",
    linkedin: "#",
    email: "mailto:hello@example.com",
  },
];

const team2: TeamMember[] = [
  {
    name: "Sarthak Deb",
    role: "AI Lead Engineer",
    image: "/images/dummyUser.png",
    bio: "Focused on building meaningful products that create long-term impact through innovation and strong values.",
    linkedin: "#",
    email: "mailto:hello@example.com",
  },
  {
    name: "Suryanshu Pal",
    role: "AI Engineer",
    image: "/images/dummyUser.png",
    bio: "Drives growth by connecting people with solutions that truly improve how businesses operate.",
    linkedin: "#",
    email: "mailto:hello@example.com",
  },
  {
    name: "Siddhant Kumar",
    role: "AI Engineer",
    image: "/images/dummyUser.png",
    bio: "Focused on building meaningful products that create long-term impact through innovation and strong values.",
    linkedin: "#",
    email: "mailto:hello@example.com",
  },
  {
    name: "Prashant Kumar",
    role: "DevSecOps Engineer",
    image: "/images/dummyUser.png",
    bio: "Drives growth by connecting people with solutions that truly improve how businesses operate.",
    linkedin: "#",
    email: "mailto:hello@example.com",
  },
  {
    name: "Pradip Madheshiya",
    role: "Full Stack AI Developer",
    image: "/images/dummyUser.png",
    bio: "Focused on building meaningful products that create long-term impact through innovation and strong values.",
    linkedin: "#",
    email: "mailto:pradip.jschamp@gmail.com",
  },
  {
    name: "Adarsh Bhargav",
    role: "Full Stack AI Developer",
    image: "/images/dummyUser.png",
    bio: "Drives growth by connecting people with solutions that truly improve how businesses operate.",
    linkedin: "#",
    email: "mailto:hello@example.com",
  },
  {
    name: "Ankur Jaiswal",
    role: "Full Stack AI Developer",
    image: "/images/dummyUser.png",
    bio: "Focused on building meaningful products that create long-term impact through innovation and strong values.",
    linkedin: "#",
    email: "mailto:hello@example.com",
  },
];

const team3: TeamMember[] = [
  {
    name: "Sonali Arya",
    role: "HR/Admin Manager",
    image: "/images/dummyUser.png",
    bio: "Focused on building meaningful products that create long-term impact through innovation and strong values.",
    linkedin: "#",
    email: "mailto:hello@example.com",
  },
  {
    name: "Nitesh Gupta",
    role: "UX Lead",
    image: "/images/dummyUser.png",
    bio: "Drives growth by connecting people with solutions that truly improve how businesses operate.",
    linkedin: "#",
    email: "mailto:hello@example.com",
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Meet the People Behind the Vision
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            A passionate team dedicated to building smart, reliable, and
            future-ready solutions for modern businesses.
          </p>
        </div>

        <h3 className="text-center text-2xl font-semibold text-brandlight">Leadership Team</h3>

        {/* Team Grid */}
        <div className="flex justify-center flex-wrap gap-4 mt-6">
          {team1.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-72"
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-brandlight font-semibold mt-1">
                  {member.role}
                </p>

                <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                  {member.bio}
                </p>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="p-2 rounded-full bg-slate-100 hover:bg-brandlight hover:text-white transition"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={member.email}
                      className="p-2 rounded-full bg-slate-100 hover:bg-brandlight hover:text-white transition"
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brandlight group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        <h3 className="text-center text-2xl font-semibold text-brandlight mt-16">AI/ML Development Team</h3>

        {/* Team Grid */}
        <div className="flex justify-center flex-wrap gap-4 mt-6">
          {team2.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-72"
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-brandlight font-semibold mt-1">
                  {member.role}
                </p>

                <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                  {member.bio}
                </p>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="p-2 rounded-full bg-slate-100 hover:bg-brandlight hover:text-white transition"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={member.email}
                      className="p-2 rounded-full bg-slate-100 hover:bg-brandlight hover:text-white transition"
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brandlight group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        <h3 className="text-center text-2xl font-semibold text-brandlight mt-16">Admin and HR Team</h3>

        {/* Team Grid */}
        <div className="flex justify-center flex-wrap gap-4 mt-6">
          {team3.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-72"
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-brandlight font-semibold mt-1">
                  {member.role}
                </p>

                <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                  {member.bio}
                </p>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="p-2 rounded-full bg-slate-100 hover:bg-brandlight hover:text-white transition"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={member.email}
                      className="p-2 rounded-full bg-slate-100 hover:bg-brandlight hover:text-white transition"
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brandlight group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
