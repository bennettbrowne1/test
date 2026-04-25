const AREAS = [
  'Midlothian',
  'Richmond',
  'Chesterfield',
  'Henrico',
  'Glen Allen',
  'Short Pump',
  'Mechanicsville',
  'Ashland',
  'Bon Air',
  'Colonial Heights',
  'Petersburg',
  'Hopewell',
]

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-ip-alt py-20 lg:py-28">
      <div className="max-w-content mx-auto px-4 lg:px-6">
        <div className="text-center mb-14">
          <span className="font-barlow font-bold uppercase tracking-widest text-xs text-ip-orange mb-3 inline-block">
            Coverage
          </span>
          <h2 className="font-barlow font-black uppercase text-white leading-none tracking-tightest"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}>
            WE SERVE GREATER RICHMOND
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {AREAS.map(area => (
            <div
              key={area}
              className="border text-center px-3 py-4 hover:border-ip-orange/60 hover:bg-ip-orange/5 transition-all duration-200 group"
              style={{ borderColor: 'rgba(255,106,0,0.15)' }}
            >
              <span className="font-barlow font-bold uppercase tracking-wide text-ip-sec group-hover:text-white text-xs transition-colors duration-200">
                {area}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="ip-btn-outline text-xs">
            VIEW ALL SERVICE AREAS
          </a>
        </div>
      </div>
    </section>
  )
}
