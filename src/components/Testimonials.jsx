const REVIEWS = [
  {
    text: 'I am so glad you advertise in the paper. Professional, on time, and they cleaned up after themselves. I will definitely be using Imperial Plumbing again!',
    name: 'Jenny',
    location: 'Richmond, VA',
    stars: 5,
  },
  {
    text: 'Imperial Plumbing promptly responds to my service calls and the technician goes above and beyond to make sure the job is done right. Highly recommend.',
    name: 'Lewis Little',
    location: 'S&L Property Management',
    stars: 5,
  },
  {
    text: "Called at 11 PM with a burst pipe. They answered immediately and had a plumber at my door within the hour. Saved my hardwood floors. Incredible service.",
    name: 'Marcus T.',
    location: 'Midlothian, VA',
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-ip-orange" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-ip-alt2 py-20 lg:py-28">
      <div className="max-w-content mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <span className="font-barlow font-bold uppercase tracking-widest text-xs text-ip-orange mb-3 inline-block">
            Customer Reviews
          </span>
          <h2 className="font-barlow font-black uppercase text-white leading-none tracking-tightest"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}>
            WHAT RICHMOND SAYS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map(({ text, name, location, stars }) => (
            <div
              key={name}
              className="bg-ip-alt border border-white/5 p-7 flex flex-col gap-4 hover:border-ip-orange/30 transition-colors duration-300"
              style={{ borderColor: 'rgba(255,106,0,0.1)' }}
            >
              <Stars count={stars} />
              <p className="font-lora italic text-ip-sec leading-relaxed flex-1">
                &ldquo;{text}&rdquo;
              </p>
              <div className="pt-4 border-t border-white/5">
                <div className="font-barlow font-bold uppercase tracking-wide text-white text-sm">
                  {name}
                </div>
                <div className="font-lora text-ip-sec text-xs mt-0.5">{location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
