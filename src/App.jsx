import EmergencyBar   from './components/EmergencyBar'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import StatsBand      from './components/StatsBand'
import Services       from './components/Services'
import WhyImperial    from './components/WhyImperial'
import Testimonials   from './components/Testimonials'
import EmergencyCTA   from './components/EmergencyCTA'
import ServiceAreas   from './components/ServiceAreas'
import Contact        from './components/Contact'
import Footer         from './components/Footer'

export default function App() {
  return (
    <>
      <EmergencyBar />
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <Services />
        <WhyImperial />
        <Testimonials />
        <EmergencyCTA />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
