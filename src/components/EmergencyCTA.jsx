export default function EmergencyCTA() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #0d0d0d 50%, #080808 100%)',
      }}
    >
      {/* Water texture / dark pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(255,106,0,0.3) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 50%, rgba(255,160,51,0.15) 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            180deg,
            transparent,
            transparent 3px,
            rgba(255,255,255,0.05) 3px,
            rgba(255,255,255,0.05) 4px
          )`,
        }}
      />

      {/* Pulsing orange glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #ff6a00, transparent)' }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #ff6a00, transparent)' }}
      />

      <div className="relative z-10 max-w-content mx-auto px-4 lg:px-6 text-center">
        <span className="font-barlow font-bold uppercase tracking-widest text-xs text-ip-orange mb-4 inline-block">
          Emergency Line
        </span>
        <h2
          className="font-barlow font-black uppercase text-white leading-none tracking-tightest mb-4"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
        >
          PIPE BURST? WE'RE ALREADY
          <br />
          <span className="gradient-text">ON THE WAY.</span>
        </h2>
        <p className="font-barlow font-bold uppercase tracking-widest text-ip-sec text-sm mb-10">
          24/7 Emergency Dispatch — We Answer.
        </p>

        <a
          href="tel:8048978424"
          className="inline-flex items-center gap-3 bg-ip-orange hover:bg-ip-orange-l text-white font-barlow font-black uppercase tracking-widest text-lg px-10 py-5 transition-all duration-200 hover:shadow-[0_0_40px_rgba(255,106,0,0.5)]"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          CALL NOW — (804) 897-8424
        </a>
      </div>
    </section>
  )
}
