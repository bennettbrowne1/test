const POINTS = [
  'Master Plumber Certified',
  '24/7 Emergency Dispatch',
  'Prompt. Professional. Respectful.',
  '15+ Years in Richmond',
  'New Construction Specialists',
]

export default function WhyImperial() {
  return (
    <section id="about" className="bg-ip-bg py-20 lg:py-28">
      <div className="max-w-content mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left image placeholder */}
        <div className="relative">
          <div
            className="relative w-full aspect-[3/4] max-h-[550px] overflow-hidden orange-glow"
            style={{
              background: 'linear-gradient(160deg, #111 0%, #1a0f04 60%, #0a0a0a 100%)',
            }}
          >
            {/* Plumber under-sink SVG illustration */}
            <div className="absolute inset-0 flex items-end justify-center pb-0 overflow-hidden">
              <svg viewBox="0 0 300 380" className="w-full max-w-xs opacity-50" fill="none">
                {/* Sink cabinet */}
                <rect x="0" y="200" width="300" height="180" fill="#1a1a1a"/>
                <rect x="0" y="200" width="300" height="180" stroke="#ff6a00" strokeWidth="1" strokeOpacity="0.3"/>
                {/* Cabinet doors */}
                <rect x="10" y="210" width="130" height="160" rx="2" fill="#141414" stroke="#ff6a00" strokeWidth="0.5" strokeOpacity="0.2"/>
                <rect x="150" y="210" width="140" height="160" rx="2" fill="#141414" stroke="#ff6a00" strokeWidth="0.5" strokeOpacity="0.2"/>
                {/* Door handles */}
                <rect x="126" y="287" width="8" height="3" rx="1.5" fill="#ff6a00" opacity="0.6"/>
                <rect x="168" y="287" width="8" height="3" rx="1.5" fill="#ff6a00" opacity="0.6"/>
                {/* Pipes under sink */}
                <rect x="110" y="140" width="12" height="70" fill="#2a2a2a" stroke="#555" strokeWidth="1"/>
                <rect x="178" y="140" width="12" height="70" fill="#2a2a2a" stroke="#555" strokeWidth="1"/>
                <path d="M116 200 Q 116 215 140 215 Q 164 215 184 215 Q 184 200 184 200" stroke="#666" strokeWidth="8" fill="none" strokeLinecap="round"/>
                {/* Person silhouette */}
                <ellipse cx="80" cy="290" rx="30" ry="35" fill="#0d0d0d"/>
                <rect x="55" y="295" width="50" height="60" rx="4" fill="#1a1205"/>
                <ellipse cx="80" cy="260" rx="18" ry="20" fill="#1a1205"/>
                {/* Arm reaching */}
                <path d="M60 310 Q 40 320 120 320" stroke="#1a1205" strokeWidth="18" strokeLinecap="round" fill="none"/>
                <circle cx="120" cy="320" r="10" fill="#1a1205"/>
                {/* Flashlight beam */}
                <path d="M128 318 L200 280 L210 300 L135 328Z" fill="#ffa033" opacity="0.06"/>
              </svg>
            </div>

            {/* Orange accent lines */}
            <div className="absolute top-0 left-0 w-12 h-1 bg-ip-orange"/>
            <div className="absolute top-0 left-0 w-1 h-12 bg-ip-orange"/>
            <div className="absolute bottom-0 right-0 w-12 h-1 bg-ip-orange"/>
            <div className="absolute bottom-0 right-0 w-1 h-12 bg-ip-orange"/>

            {/* Experience badge */}
            <div className="absolute top-6 right-6 bg-ip-orange text-white p-4 text-center">
              <div className="font-barlow font-black text-4xl leading-none">15+</div>
              <div className="font-barlow font-bold uppercase text-xs tracking-widest">Years</div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div>
          <span className="font-barlow font-bold uppercase tracking-widest text-xs text-ip-orange mb-4 inline-block">
            Why Imperial
          </span>
          <h2 className="font-barlow font-black uppercase text-white leading-none tracking-tightest mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            THE STANDARD OTHER PLUMBERS GET COMPARED TO.
          </h2>

          <blockquote className="border-l-2 border-ip-orange pl-5 mb-8">
            <p className="font-lora italic text-ip-sec text-lg leading-relaxed">
              "Most plumbers show up.<br />
              <span className="text-white font-semibold not-italic">We show up prepared."</span>
            </p>
          </blockquote>

          <ul className="flex flex-col gap-4 mb-10">
            {POINTS.map((point, i) => (
              <li key={point} className="flex items-center gap-4">
                <span className="font-barlow font-black text-ip-orange text-sm tracking-widest shrink-0 w-8">
                  0{i + 1}
                </span>
                <div className="w-px h-4 bg-ip-orange/30 shrink-0" />
                <span className="font-barlow font-bold uppercase tracking-wide text-white text-sm">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <a href="#about" className="ip-btn-outline text-xs">
            LEARN MORE ABOUT US
          </a>
        </div>
      </div>
    </section>
  )
}
