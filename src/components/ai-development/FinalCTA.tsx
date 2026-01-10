export default function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-black text-white py-32 overflow-hidden -mb-10">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.12),transparent_45%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to Build an AI Product <br />
          <span className="text-brandlight">That Actually Works?</span>
        </h2>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#book-call"
            className="px-8 py-4 rounded-xl bg-brandlight text-black font-semibold
                       hover:bg-brandlight transition shadow-lg shadow-cyan-500/20"
          >
            Book AI Architecture Call
          </a>

          <a
            href="#feasibility"
            className="px-8 py-4 rounded-xl border border-white/20
                       hover:bg-white/5 transition font-medium"
          >
            Get AI Feasibility Review
          </a>
        </div>

        {/* Trust note */}
        <p className="mt-10 text-sm text-gray-400">
          NDA friendly. Production mindset. Zero fluff.
        </p>
      </div>
    </section>
  );
}
