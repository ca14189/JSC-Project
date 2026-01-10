export default function DevelopmentApproach() {
  const steps = [
    {
      step: "01",
      title: "Problem Framing",
      points: ["AI suitability check", "ROI clarity", "Data readiness"],
    },
    {
      step: "02",
      title: "Architecture Design",
      points: ["Model choice", "Cost vs accuracy", "Security & compliance"],
    },
    {
      step: "03",
      title: "Build & Integrate",
      points: ["Frontend + backend + AI together", "No siloed teams"],
    },
    {
      step: "04",
      title: "Deploy & Scale",
      points: ["Monitoring", "Retraining", "Continuous improvement"],
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white py-32 overflow-hidden">
      {/* soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.08),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <p className="text-brandlight font-medium mb-3">
            How we deliver
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Our <span className="text-brandlight">Development Approach</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Built for production. Designed for trust.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-10 space-y-16">

          {steps.map((item) => (
            <div key={item.step} className="relative">
              {/* Dot */}
              <span className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-brandlight shadow-[0_0_0_6px_rgba(34,211,238,0.15)]" />

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 hover:border-brandlight/40 transition">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-brandlight font-bold tracking-widest">
                    STEP {item.step}
                  </span>
                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>
                </div>

                <ul className="space-y-3 text-gray-300">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="text-brandlight">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Statement */}
        <div className="mt-24 flex flex-col items-center">
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            If it can’t run in production,
          </h3>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight text-brandlight mt-2">
            it doesn’t ship.
          </h3>
        </div>
      </div>
    </section>
  );
}
