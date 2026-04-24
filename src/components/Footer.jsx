const SERVICE_LINKS = [
  { label: 'Emergency Service', href: '#services' },
  { label: 'New Construction',  href: '#services' },
  { label: 'Sewer & Water',     href: '#services' },
  { label: 'Remodeling',        href: '#services' },
  { label: 'Gas Piping',        href: '#services' },
  { label: 'Storm & Fire',      href: '#services' },
]

const COMPANY_LINKS = [
  { label: 'About Us',       href: '#about' },
  { label: 'Reviews',        href: '#reviews' },
  { label: 'Service Areas',  href: '#service-areas' },
  { label: 'For Contractors',href: '#contractors' },
  { label: 'Contact',        href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ip-alt2 border-t border-white/5">
      <div className="max-w-content mx-auto px-4 lg:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="font-barlow font-black text-2xl uppercase tracking-tight text-white mb-3">
            IMPERIAL<span className="text-ip-orange"> PLUMBING</span>
          </div>
          <p className="font-lora text-ip-sec text-sm leading-relaxed mb-4">
            Master plumbers serving Richmond, VA and surrounding areas since 2010.
            Licensed · Bonded · Insured.
          </p>
          <a
            href="tel:8048978424"
            className="inline-flex items-center gap-2 text-ip-orange font-barlow font-bold uppercase text-xs tracking-widest hover:underline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (804) 897-8424
          </a>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-barlow font-black uppercase tracking-widest text-white text-xs mb-4">
            Services
          </h4>
          <ul className="flex flex-col gap-2">
            {SERVICE_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="font-lora text-ip-sec text-sm hover:text-ip-orange transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-barlow font-black uppercase tracking-widest text-white text-xs mb-4">
            Company
          </h4>
          <ul className="flex flex-col gap-2">
            {COMPANY_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="font-lora text-ip-sec text-sm hover:text-ip-orange transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-barlow font-black uppercase tracking-widest text-white text-xs mb-4">
            Contact
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="font-lora text-ip-sec">820 Murray Olds Drive<br />Midlothian, VA 23114</li>
            <li>
              <a href="tel:8048978424" className="font-lora text-ip-sec hover:text-ip-orange transition-colors">
                (804) 897-8424
              </a>
            </li>
            <li>
              <a href="mailto:info@imperialplumbinginc.com" className="font-lora text-ip-sec hover:text-ip-orange transition-colors break-all">
                info@imperialplumbinginc.com
              </a>
            </li>
            <li className="font-lora text-ip-sec">
              Mon–Fri 7AM–6PM<br />
              <span className="text-ip-orange font-semibold">Emergency: 24/7</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-content mx-auto px-4 lg:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-lora text-ip-sec text-xs">
            &copy; 2026 Imperial Plumbing Inc. All rights reserved.
          </p>
          <p className="font-barlow font-bold uppercase text-xs tracking-widest text-ip-sec">
            VA Lic. #2705110656-A
          </p>
        </div>
      </div>
    </footer>
  )
}
