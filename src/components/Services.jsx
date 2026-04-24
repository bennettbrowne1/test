const SERVICES = [
  {
    title: 'Emergency Service',
    desc: 'Burst pipe, flooding, no hot water — we answer when others don\'t. 24/7 rapid dispatch across Richmond.',
    cta: 'CALL NOW',
    href: 'tel:8048978424',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    bg: 'from-red-950/40 to-ip-alt2',
  },
  {
    title: 'New Construction',
    desc: 'Rough-in to finish. We partner with builders and contractors on ground-up residential and commercial projects.',
    cta: 'GET QUOTE',
    href: '#contact',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    bg: 'from-amber-950/30 to-ip-alt2',
  },
  {
    title: 'Sewer & Water',
    desc: 'Line inspection, hydro-jetting, trenchless repair. We handle what\'s underground so you don\'t have to.',
    cta: 'GET QUOTE',
    href: '#contact',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    bg: 'from-blue-950/30 to-ip-alt2',
  },
  {
    title: 'Remodeling',
    desc: 'Kitchen, bath, basement — full plumbing scope for renovations. On schedule, on spec, no surprises.',
    cta: 'GET QUOTE',
    href: '#contact',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    bg: 'from-emerald-950/30 to-ip-alt2',
  },
  {
    title: 'Gas Piping',
    desc: 'New lines, appliance hookups, leak detection. Certified gas work done right — no shortcuts.',
    cta: 'GET QUOTE',
    href: '#contact',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
    bg: 'from-orange-950/40 to-ip-alt2',
  },
  {
    title: 'Storm & Fire Damage',
    desc: 'Rapid response restoration plumbing after floods, pipe bursts, or fire suppression damage.',
    cta: 'GET QUOTE',
    href: '#contact',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    bg: 'from-purple-950/30 to-ip-alt2',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-ip-alt py-20 lg:py-28">
      <div className="max-w-content mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <span className="font-barlow font-bold uppercase tracking-widest text-xs text-ip-orange mb-3 inline-block">
            What We Do
          </span>
          <h2 className="font-barlow font-black uppercase text-white leading-none tracking-tightest"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}>
            OUR SERVICES
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ title, desc, cta, href, icon, bg }) => (
            <div
              key={title}
              className={`group relative bg-gradient-to-br ${bg} border border-white/5 p-7 flex flex-col gap-5 transition-all duration-300 orange-glow-hover cursor-default`}
              style={{ borderColor: 'rgba(255,106,0,0.15)' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-ip-orange transition-all duration-500" />

              <div className="text-ip-orange">{icon}</div>

              <div className="flex-1">
                <h3 className="font-barlow font-black uppercase tracking-wide text-white text-xl mb-2">
                  {title}
                </h3>
                <p className="font-lora text-ip-sec text-sm leading-relaxed">{desc}</p>
              </div>

              <a
                href={href}
                className="self-start font-barlow font-bold uppercase tracking-widest text-xs text-ip-orange border border-ip-orange/40 px-4 py-2 hover:bg-ip-orange hover:text-white transition-all duration-200"
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
