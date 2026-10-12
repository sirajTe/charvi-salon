import { useCallback, useEffect, useState } from 'react'
import { IconSprite } from './components/Icons.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Offers from './components/Offers.jsx'
import Combos from './components/Combos.jsx'
import WhyUs from './components/WhyUs.jsx'
import Booking from './components/Booking.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'

export default function App() {
  const [selection, setSelection] = useState({ who: 'Female', service: '' })

  // Called from "Book this" buttons: prefill the form and jump to it
  const pick = useCallback((service, who) => {
    setSelection((s) => ({ who: who ?? s.who, service }))
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    // The browser tries to jump to #hash before React renders, so redo it once mounted
    if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView()

    return () => io.disconnect()
  }, [])

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <IconSprite />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Offers onPick={pick} />
        <Combos onPick={pick} />
        <WhyUs />
        <Booking selection={selection} setSelection={setSelection} />
        <Location />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
