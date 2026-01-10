"use client";

import { useState } from "react";

type UseCase = {
  title: string;
  icon: string;
  how: string[];
};

const useCases: UseCase[] = [
  {
    title: "AI Assistants & Copilots",
    icon: "🤖",
    how: ["UI Layer", "Prompt Orchestration", "LLM", "Memory Store", "Feedback Loop"],
  },
  {
    title: "Voice AI & Call Intelligence",
    icon: "📞",
    how: ["Speech-to-Text", "LLM Reasoning", "Intent Engine", "CRM Sync"],
  },
  {
    title: "Decision Engines (CRM, ERP, BFSI)",
    icon: "🧠",
    how: ["Data Pipelines", "Rules Engine", "ML Models", "Human Review"],
  },
  {
    title: "Search, Recommendation & RAG",
    icon: "🔍",
    how: ["Vector DB", "Retriever", "LLM", "Ranking Layer"],
  },
  {
    title: "Document AI",
    icon: "🧾",
    how: ["OCR", "Chunking", "Embedding", "LLM Reasoning"],
  },
  {
    title: "Developer Tools powered by AI",
    icon: "🧑‍💻",
    how: ["IDE Plugins", "Code Analysis", "LLM", "CI Integration"],
  },
  {
    title: "Predictive Analytics Platforms",
    icon: "📊",
    how: ["Event Streams", "Feature Store", "ML Models", "Dashboards"],
  },
];

export default function AIUseCases() {
  const [active, setActive] = useState<UseCase | null>(null);

  return (
    <section className="relative bg-slate-950 text-white py-28 overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.08),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <p className="text-brandlight font-medium mb-3">
            What we build
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            AI Use-Cases <span className="text-brandlight">in Production</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Real systems. Real users. Real scale.
          </p>
        </div>

        {/* Scrollable Cards */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="snap-start min-w-[280px] md:min-w-[340px]
                           group relative rounded-3xl border border-white/10
                           bg-white/5 backdrop-blur p-8
                           hover:border-brandlight/50 transition"
              >
                <div className="text-3xl mb-4">{item.icon}</div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <button
                  onClick={() => setActive(item)}
                  className="mt-6 text-sm font-medium text-brandlight hover:text-brandlight/80"
                >
                  How it works →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-white/10 p-8">

            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <div className="text-3xl mb-4">{active.icon}</div>
            <h3 className="text-2xl font-bold mb-6">
              {active.title}
            </h3>

            <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest">
              Architecture flow
            </p>

            <div className="flex flex-wrap gap-3">
              {active.how.map((step, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm
                             bg-cyan-500/10 text-brandlight
                             border border-cyan-500/20"
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
