export default function WhyJSChamps() {
  const truths = [
    "We’re not “prompt engineers”",
    "We don’t ship toy demos",
    "We think in systems, not scripts",
    "We care about latency, cost, and scale",
    "We blend product + AI + engineering",
  ];

  const proofHooks = [
    {
      title: "Architecture screenshots",
      desc: "Real system designs, not slideware.",
    },
    {
      title: "Flow diagrams",
      desc: "From user action to model output — end to end.",
    },
    {
      title: "Performance metrics",
      desc: "Latency, throughput, cost per request.",
    },
    {
      title: "Client logos",
      desc: "Teams that trust us to ship real AI.",
    },
  ];

  return (
    <section className="relative bg-slate-950 text-white py-32 overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.08),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <p className="text-brandlight font-medium mb-3">
            Why JSChamps
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Built for <span className="text-brandlight">Production AI</span>,  
            not for demos.
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Straight Talk */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Straight talk
            </p>

            <ul className="space-y-4 text-xl">
              {truths.map((line) => (
                <li key={line} className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brandlight" />
                  <span className="text-gray-100">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Proof Hooks */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
              Proof, not promises
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {proofHooks.map((item) => (
                <div
                  key={item.title}
                  className="group relative rounded-3xl border border-white/10
                             bg-white/5 backdrop-blur p-8
                             hover:border-brandlight/40 transition"
                >
                  {/* hover glow */}
                  <div className="absolute inset-0 rounded-3xl bg-cyan-500/0 group-hover:bg-cyan-500/10 transition" />

                  <div className="relative">
                    <h3 className="text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-28 flex flex-col items-center">
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            Anyone can demo AI.
          </h3>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight text-brandlight mt-2">
            We engineer it for the real world.
          </h3>
        </div>
      </div>
    </section>
  );
}
