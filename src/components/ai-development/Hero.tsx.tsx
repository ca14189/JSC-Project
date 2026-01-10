"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const flowSteps = [
  "UI",
  "API",
  "Data Pipelines",
  "ML Models",
  "AI Agents",
  "Monitoring",
];

export default function Hero() {
  return (
    <section className="relative flex justify-center items-center min-h-[90vh] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-28 lg:py-0 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-brandlight mb-4">
            Full-Stack AI Development
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Build AI Products,{" "}
            <span className="text-brandlight">Not Just Demos.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            We design, develop, and deploy full-stack AI systems — from user
            experience to model orchestration and production scale.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="px-6 py-3 rounded-xl bg-brandlight text-black font-semibold
                         hover:bg-brandlight transition"
            >
              Talk to AI Architects
            </Link>

            <Link
              href="#use-cases"
              className="px-6 py-3 rounded-xl border border-white/20
                         hover:bg-white/5 transition"
            >
              See AI Use Cases
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="relative flex flex-col sm:flex-row justify-between gap-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">

            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 mb-4">
                End-to-end AI Delivery Flow
              </p>
              {flowSteps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 }}
                  className="relative flex items-center gap-4"
                >
                  {/* glowing dot */}
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-brandlight opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brandlight" />
                  </span>

                  <span className="text-sm md:text-base font-medium text-gray-200">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="relative w-full h-50">
              <Image
                src="/images/ai-development.png"
                alt="Full-Stack AI Development"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* soft glow behind card */}
          <div className="absolute -inset-6 bg-cyan-500/10 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
