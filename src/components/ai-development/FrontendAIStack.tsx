export default function FrontendAIStack() {

  const visualCards= [
            {
              title: "AI-aware UX",
              desc: "Interfaces designed for uncertainty, confidence levels, and human decision-making."
            },
            {
              title: "Real-time AI responses",
              desc: "Streaming outputs and instant feedback loops powered by live inference."
            },
            {
              title: "Explainable outputs",
              desc: "Not just answers — but the reasoning users can understand and trust."
            },
            {
              title: "Trust & feedback loops",
              desc: "Users shape the system through ratings, corrections, and behavioral signals."
            },
          ]

  return (
    <section className="relative bg-slate-950 text-white py-28 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.08),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <p className="text-brandlight font-medium mb-3">
            Our AI Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Frontend — <span className="text-brandlight">The Human Layer</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Where intelligence meets experience.  
            This is how users actually interact with AI systems.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto place-items-center gap-8">
          {visualCards.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8
                        hover:border-brandlight/50 transition"
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-3xl bg-cyan-500/0 group-hover:bg-cyan-500/10 transition" />

              <div className="relative">
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Bar */}
        <div className="mt-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-gray-400 text-sm uppercase tracking-widest">
            Tech powering the Human Layer
          </p>

          <div className="flex flex-wrap gap-4 text-sm font-medium">
            {["React", "Next.js", "Flutter", "WebSockets"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-cyan-500/10 text-brandlight border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
