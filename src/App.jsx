import React from 'react'

import AvailabilityBanner from './components/AvailabilityBanner'
import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import Marquee           from './components/Marquee'
import About             from './components/About'
import Achievements      from './components/Achievements'
import Protocols         from './components/Protocols'
import Services          from './components/Services'
import Projects          from './components/Projects'
import Experience        from './components/Experience'
import Testimonials      from './components/Testimonials'
import FAQ               from './components/FAQ'
import Contact           from './components/Contact'
import CTAStrip          from './components/CTAStrip'
import Footer            from './components/Footer'
import ScrollToTop       from './components/ScrollToTop'

export default function App() {
  return (
    <>
      {/* Fixed UI chrome */}
      <AvailabilityBanner />
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <Marquee />
        <About />
        <Achievements />
        <Protocols />
        <Services />
        <Projects />
        <Experience />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer area */}
      <CTAStrip />
      <Footer />

      {/* Floating scroll-to-top */}
      <ScrollToTop />
    </>
  )
}
