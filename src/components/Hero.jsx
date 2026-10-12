import { Icon } from './Icons.jsx'
import { PHONE_DISPLAY, TEL } from '../data.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Icon name="leaf" className="leaf l1" />
      <Icon name="leaf" className="leaf l2" />
      <div className="container hero-inner">
        <svg className="crown" viewBox="0 0 64 40" aria-hidden="true">
          <path fill="currentColor" d="M4 34 0 8l16 12L32 0l16 20L64 8l-4 26zM4 36h56v4H4z" />
        </svg>
        <h1 className="gold-text">Charvi</h1>
        <div className="salon">SALON</div>
        <p className="pillars">HAIR &nbsp;•&nbsp; SKIN &nbsp;•&nbsp; BEAUTY &nbsp;•&nbsp; WELLNESS</p>
        <p className="tagline">Look Good • Feel Good</p>
        <div className="hero-actions">
          <a href="#book" className="btn btn-gold"><Icon name="cal" />Book Appointment</a>
          <a href={TEL} className="btn btn-outline"><Icon name="phone" />{PHONE_DISPLAY}</a>
        </div>
        <div className="hero-badges">
          <span>✦ Unisex Salon</span>
          <span>✦ Combo Offers for Him &amp; Her</span>
          <span>✦ Suncity Society</span>
        </div>
      </div>
      <a href="#services" className="scroll-hint" aria-label="Scroll down" />
    </section>
  )
}
