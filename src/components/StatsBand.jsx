const STATS = [
  { number: '15+',  label: 'Years Serving Richmond' },
  { number: '24/7', label: 'Emergency Dispatch' },
  { number: '5',    label: 'Core Service Lines' },
  { number: '100%', label: 'Licensed & Insured' },
]

export default function StatsBand() {
  return (
    <div className="bg-ip-orange">
      <div className="max-w-content mx-auto px-4 lg:px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/20">
        {STATS.map(({ number, label }) => (
          <div key={label} className="text-center px-4">
            <div className="font-barlow font-black text-4xl lg:text-5xl text-white leading-none mb-1">
              {number}
            </div>
            <div className="font-barlow font-bold uppercase tracking-widest text-xs text-white/80">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
