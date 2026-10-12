import { useEffect, useState } from 'react'
import { Icon } from './Icons.jsx'

const LINKS = [
  ['#services', 'Services'],
  ['#offers', 'Offers'],
  ['#combos', 'Combos'],
  ['#why', 'About'],
  ['#contact', 'Contact'],
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={scrolled || open ? 'scrolled' : ''}>
      <div className="container nav">
        <a href="#top" className="logo" aria-label="Charvi Salon home">
          <span className="script">Charvi</span><small>SALON</small>
        </a>
        <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          {LINKS.map(([href, label]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
        </ul>
        <a href="#book" className="btn btn-gold nav-cta"><Icon name="cal" />Book Now</a>
        <button
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d={open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'} />
          </svg>
        </button>
      </div>
    </header>
  )
}
