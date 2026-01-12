export default function OurAIStack() {
  const layers = [
    {
      title: "Frontend",
      subtitle: "Human Layer",
      points: [
        "AI-aware UX",
        "Real-time AI responses",
        "Explainable outputs",
        "Trust & feedback loops",
      ],
      tech: ["React", "Next.js", "Flutter", "WebSockets"],
    },
    {
      title: "Backend",
      subtitle: "Control Layer",
      points: [
        "Secure APIs",
        "Model gateways",
        "Prompt orchestration",
        "Rate limits & cost control",
      ],
      tech: ["Node.js", "Python", "Java", "FastAPI", "Spring Boot"],
    },
    {
      title: "Data Layer",
      subtitle: "Fuel",
      points: [
        "Data ingestion",
        "Feature stores",
        "Vector databases",
        "Streaming pipelines",
      ],
      tech: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Pinecone", "Weaviate"],
    },
    {
      title: "ML / AI Layer",
      subtitle: "Brain",
      points: [
        "ML models",
        "LLMs",
        "Fine-tuning",
        "RAG pipelines",
      ],
      tech: ["PyTorch", "TensorFlow", "OpenAI", "Anthropic", "Hugging Face"],
    },
    {
      title: "Orchestration & Ops",
      subtitle: "Reality Check",
      points: [
        "AI agents",
        "Workflow engines",
        "Monitoring & retraining",
        "Cost + performance tracking",
      ],
      tech: ["LangChain", "Temporal", "Airflow", "Kubernetes", "MLOps"],
    },
  ];

  return (
    <section className="relative bg-slate-950 text-white py-32 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.08),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <p className="text-brandlight font-medium mb-3">
            Our AI Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Built as a <span className="text-brandlight">system</span>,  
            not as scripts.
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Every layer matters — from human experience to model operations.
          </p>
        </div>

        {/* Stack Cards */}
        <div className="space-y-10">

          {layers.map((layer) => (
            <div
              key={layer.title}
              className="group relative rounded-3xl border border-white/10
                         bg-white/5 backdrop-blur p-10
                         hover:border-brandlight/40 transition"
            >
              {/* hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-cyan-500/0 group-hover:bg-cyan-500/10 transition" />

              <div className="relative grid lg:grid-cols-3 gap-10 items-start">

                {/* Layer name */}
                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400">
                    {layer.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">
                    {layer.title}
                  </h3>
                </div>

                {/* Capabilities */}
                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                    What we build
                  </p>
                  <ul className="space-y-3 text-gray-200">
                    {layer.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="text-brandlight">→</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech */}
                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                    Tech
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {layer.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-full text-sm
                                   bg-cyan-500/10 text-brandlight
                                   border border-cyan-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
