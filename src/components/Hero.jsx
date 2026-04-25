const TRUST = [
  'Master Plumber Certified',
  '15+ Years in Richmond',
  'Licensed · Bonded · Insured',
  '24/7 Emergency Dispatch',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-ip-bg overflow-hidden min-h-[88vh] flex items-center"
    >
      {/* Industrial background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.02) 2px,
            rgba(255,255,255,0.02) 4px
          )`,
        }}
      />

      {/* "15 YEARS" watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="font-barlow font-black text-white opacity-[0.025] text-[clamp(6rem,22vw,18rem)] uppercase leading-none tracking-tightest"
        >
          15 YEARS
        </span>
      </div>

      <div className="relative z-10 max-w-content mx-auto px-4 lg:px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left */}
        <div>
          <span className="inline-block font-barlow font-bold uppercase tracking-widest text-xs text-ip-orange border border-ip-orange/30 px-3 py-1 mb-6">
            Richmond's #1 Master Plumbers
          </span>

          <h1 className="font-barlow font-black uppercase leading-none tracking-tightest text-white mb-6"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
            MASTER PLUMBERS.<br />
            24/7 RESPONSE.<br />
            <span className="gradient-text">RICHMOND CALLS IMPERIAL.</span>
          </h1>

          <p className="font-lora text-ip-sec text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
            Burst pipe. Sewer backup. Remodel gone wrong.<br />
            <strong className="text-white font-semibold">When it matters, you call someone who answers.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="tel:8048978424"
              className="ip-btn-primary text-center text-sm"
            >
              CALL NOW — (804) 897-8424
            </a>
            <a
              href="#contact"
              className="ip-btn-outline text-center text-sm"
            >
              GET FREE ESTIMATE
            </a>
          </div>

          {/* Trust row */}
          <div className="grid grid-cols-2 gap-3">
            {TRUST.map(item => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-ip-orange shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="font-barlow font-bold uppercase text-xs tracking-wider text-ip-sec">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — cinematic van placeholder */}
        <div className="relative hidden lg:block">
          <div
            className="relative w-full aspect-[4/3] rounded-sm overflow-hidden orange-glow"
            style={{
              background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1008 50%, #0a0a0a 100%)',
            }}
          >
            {/* Simulated night-scene layers */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
              {/* Van silhouette */}
              <svg viewBox="0 0 400 200" className="w-full max-w-xs opacity-60" fill="none">
                <rect x="20" y="90" width="280" height="90" rx="4" fill="#1e1008"/>
                <rect x="20" y="90" width="280" height="90" rx="4" stroke="#ff6a00" strokeWidth="1.5" strokeOpacity="0.4"/>
                <rect x="40" y="60" width="160" height="60" rx="3" fill="#150e05"/>
                <rect x="40" y="60" width="160" height="60" rx="3" stroke="#ff6a00" strokeWidth="1" strokeOpacity="0.3"/>
                <rect x="50" y="68" width="60" height="40" rx="2" fill="#0d1a2e" opacity="0.8"/>
                <rect x="120" y="68" width="60" height="40" rx="2" fill="#0d1a2e" opacity="0.8"/>
                <circle cx="75" cy="185" r="18" fill="#1a1a1a" stroke="#ff6a00" strokeWidth="1.5" strokeOpacity="0.5"/>
                <circle cx="75" cy="185" r="8" fill="#0a0a0a"/>
                <circle cx="240" cy="185" r="18" fill="#1a1a1a" stroke="#ff6a00" strokeWidth="1.5" strokeOpacity="0.5"/>
                <circle cx="240" cy="185" r="8" fill="#0a0a0a"/>
                {/* Headlights */}
                <ellipse cx="298" cy="130" rx="6" ry="12" fill="#ffa033" opacity="0.9"/>
                <path d="M298 120 L360 90 L360 170 L298 140Z" fill="url(#headlight)" opacity="0.12"/>
                <defs>
                  <linearGradient id="headlight" x1="298" y1="130" x2="360" y2="130">
                    <stop offset="0%" stopColor="#ffa033"/>
                    <stop offset="100%" stopColor="transparent"/>
                  </linearGradient>
                </defs>
                {/* Ground reflection */}
                <rect x="20" y="178" width="280" height="2" fill="#ff6a00" opacity="0.15" rx="1"/>
              </svg>

              <div className="text-center">
                <p className="font-barlow font-black text-2xl uppercase tracking-widest text-white">
                  ON CALL 24/7
                </p>
                <p className="font-lora text-ip-sec text-sm mt-1">
                  Dispatching across Greater Richmond
                </p>
              </div>
            </div>

            {/* Orange corner accent */}
            <div className="absolute top-0 right-0 w-20 h-1 bg-ip-orange"/>
            <div className="absolute bottom-0 left-0 w-20 h-1 bg-ip-orange"/>

            {/* Glow overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 70% 60%, rgba(255,106,0,0.08) 0%, transparent 70%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
