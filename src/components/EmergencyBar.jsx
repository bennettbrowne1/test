export default function EmergencyBar() {
  return (
    <div className="bg-ip-orange z-50 relative">
      <div className="max-w-content mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-1">
        <span className="font-barlow font-bold uppercase tracking-widest text-white text-xs sm:text-sm">
          24/7 Emergency Service Available
        </span>
        <a
          href="tel:8048978424"
          className="font-barlow font-bold uppercase tracking-widest text-white text-xs sm:text-sm hover:underline"
        >
          CALL NOW: (804) 897-8424
        </a>
      </div>
    </div>
  )
}
