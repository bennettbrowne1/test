import { useState } from 'react'

const SERVICES = [
  'Select a Service',
  'Emergency Service',
  'New Construction',
  'Sewer & Water',
  'Remodeling',
  'Gas Piping',
  'Storm & Fire Damage',
  'Other',
]

export default function Contact() {
  const [form, setForm]       = useState({ firstName: '', lastName: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmit] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmit(true)
  }

  return (
    <section id="contact" className="bg-ip-bg py-20 lg:py-28">
      <div className="max-w-content mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <span className="font-barlow font-bold uppercase tracking-widest text-xs text-ip-orange mb-3 inline-block">
            Get In Touch
          </span>
          <h2 className="font-barlow font-black uppercase text-white leading-none tracking-tightest"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}>
            REQUEST SERVICE
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
          {/* Col 1 — Form */}
          <div className="lg:col-span-1">
            {submitted ? (
              <div className="border border-ip-orange/30 bg-ip-orange/5 p-8 text-center h-full flex flex-col items-center justify-center gap-4">
                <svg className="w-12 h-12 text-ip-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-barlow font-black uppercase text-white text-2xl tracking-wide">
                  Request Received
                </h3>
                <p className="font-lora text-ip-sec text-sm leading-relaxed">
                  We'll reach out same day. For emergencies call us directly at{' '}
                  <a href="tel:8048978424" className="text-ip-orange hover:underline">(804) 897-8424</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-barlow font-bold uppercase text-xs tracking-widest text-ip-sec mb-1.5 block">First Name</label>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Jane"
                      className="w-full bg-ip-alt border border-white/10 focus:border-ip-orange/60 text-white placeholder-white/20 px-4 py-3 text-sm font-lora outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-barlow font-bold uppercase text-xs tracking-widest text-ip-sec mb-1.5 block">Last Name</label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Smith"
                      className="w-full bg-ip-alt border border-white/10 focus:border-ip-orange/60 text-white placeholder-white/20 px-4 py-3 text-sm font-lora outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-barlow font-bold uppercase text-xs tracking-widest text-ip-sec mb-1.5 block">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(804) 555-0000"
                    className="w-full bg-ip-alt border border-white/10 focus:border-ip-orange/60 text-white placeholder-white/20 px-4 py-3 text-sm font-lora outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-barlow font-bold uppercase text-xs tracking-widest text-ip-sec mb-1.5 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                    className="w-full bg-ip-alt border border-white/10 focus:border-ip-orange/60 text-white placeholder-white/20 px-4 py-3 text-sm font-lora outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-barlow font-bold uppercase text-xs tracking-widest text-ip-sec mb-1.5 block">Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-ip-alt border border-white/10 focus:border-ip-orange/60 text-white px-4 py-3 text-sm font-lora outline-none transition-colors appearance-none"
                  >
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-barlow font-bold uppercase text-xs tracking-widest text-ip-sec mb-1.5 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your issue or project..."
                    className="w-full bg-ip-alt border border-white/10 focus:border-ip-orange/60 text-white placeholder-white/20 px-4 py-3 text-sm font-lora outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="ip-btn-primary text-xs text-center mt-1">
                  SUBMIT REQUEST — WE RESPOND SAME DAY
                </button>
              </form>
            )}
          </div>

          {/* Col 2 — Contact info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-barlow font-black uppercase text-white tracking-wide text-xl mb-5">
                Contact Info
              </h3>
              <ul className="flex flex-col gap-5">
                <li className="flex gap-4">
                  <span className="text-ip-orange shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-barlow font-bold uppercase text-xs tracking-widest text-ip-sec mb-0.5">Phone</div>
                    <a href="tel:8048978424" className="font-barlow font-black text-white text-lg hover:text-ip-orange transition-colors">
                      (804) 897-8424
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-ip-orange shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-barlow font-bold uppercase text-xs tracking-widest text-ip-sec mb-0.5">Email</div>
                    <a href="mailto:info@imperialplumbinginc.com" className="font-lora text-white text-sm hover:text-ip-orange transition-colors">
                      info@imperialplumbinginc.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-ip-orange shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-barlow font-bold uppercase text-xs tracking-widest text-ip-sec mb-0.5">Address</div>
                    <p className="font-lora text-white text-sm">
                      820 Murray Olds Drive<br />
                      Midlothian, VA 23114
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-ip-orange shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-barlow font-bold uppercase text-xs tracking-widest text-ip-sec mb-0.5">Hours</div>
                    <p className="font-lora text-white text-sm">
                      Mon–Fri 7AM–6PM<br />
                      <span className="text-ip-orange font-semibold">Emergency: 24/7</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3 — Contractor block */}
          <div id="contractors" className="border border-ip-orange/20 p-7 flex flex-col gap-5 bg-ip-alt">
            <div className="text-ip-orange">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <div>
              <span className="font-barlow font-bold uppercase tracking-widest text-xs text-ip-orange mb-1 block">
                Sub-Contract Partnership
              </span>
              <h3 className="font-barlow font-black uppercase text-white text-2xl tracking-wide leading-tight mb-3">
                CONTRACTORS & BUILDERS
              </h3>
              <p className="font-lora text-ip-sec text-sm leading-relaxed">
                New construction specialists. We work with builders and developers across
                Greater Richmond. Call to discuss ongoing project availability and sub-contract
                partnership rates.
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              {['Ground-up residential', 'Commercial tenant build-out', 'Multi-family', 'Ongoing project availability'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-ip-orange shrink-0">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="font-barlow font-bold uppercase text-xs tracking-wide text-ip-sec">{item}</span>
                </li>
              ))}
            </ul>
            <a href="tel:8048978424" className="ip-btn-primary text-xs text-center mt-auto">
              PARTNER WITH IMPERIAL
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
