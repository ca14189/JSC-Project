export default function FullStackAIClarity() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 text-white py-28 overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <p className="text-brandlight font-medium mb-3">
            No buzzwords. Just clarity. 
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            What “Full-Stack AI”
            <span className="text-brandlight text-center"> Actually Means</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Traditional */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-10 hover:border-white/20 transition">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              Traditional Full-Stack
            </p>

            <ul className="space-y-6 text-lg text-gray-200">
              <li className="flex items-start gap-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-gray-500" />
                <span>Frontend (React, Web, Mobile)</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-gray-500" />
                <span>Backend (APIs, Databases, Auth)</span>
              </li>
            </ul>
          </div>

          {/* AI Stack */}
          <div className="group relative rounded-3xl border border-brandlight/40 bg-gradient-to-br from-cyan-500/10 to-transparent backdrop-blur p-10 hover:border-brandlight transition">
            <p className="text-sm uppercase tracking-widest text-brandlight mb-4">
              Full-Stack AI
            </p>

            <h3 className="text-xl font-semibold mb-6">
              Everything above — plus the intelligence layer
            </h3>

            <ul className="space-y-5 text-lg">
              {[
                "Data engineering",
                "ML / DL models",
                "LLM integration",
                "AI agents & workflows",
                "Monitoring, retraining, governance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brandlight" />
                  <span className="text-gray-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-24 flex flex-col items-center">
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            AI isn’t a plugin.
          </h3>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight text-brandlight mt-2">
            It’s an architecture decision.
          </h3>
        </div>
      </div>
    </section>
  );
}
