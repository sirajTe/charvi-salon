import { Icon } from './Icons.jsx'
import { ADDRESS, PHONE_DISPLAY, TEL, WHATSAPP } from '../data.js'

export default function Footer() {
  return (
    <>
      <div className="cta-band">
        <div className="container">
          <h2>Because You Deserve The Best</h2>
          <p>Book your appointment today and pamper yourself!</p>
          <a href="#book" className="btn btn-dark"><Icon name="cal" />Book Now</a>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="foot-grid">
            <div>
              <a href="#top" className="logo"><span className="script">Charvi</span><small>SALON</small></a>
              <p className="foot-about">Hair • Skin • Beauty • Wellness. A unisex salon in Suncity Society — Look Good, Feel Good.</p>
            </div>
            <nav aria-label="Footer">
              <h2 className="foot-h">Quick Links</h2>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#offers">Today's Offers</a></li>
                <li><a href="#combos">Combo Packages</a></li>
                <li><a href="#book">Book Appointment</a></li>
              </ul>
            </nav>
            <div>
              <h2 className="foot-h">Contact</h2>
              <ul>
                <li><a href={TEL}>📞 +91 {PHONE_DISPLAY}</a></li>
                <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">💬 WhatsApp</a></li>
                <li>📍 {ADDRESS.join(' ')}</li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© {new Date().getFullYear()} Charvi Salon. All rights reserved.</span>
            <span>Made with ♥ for beautiful you</span>
          </div>
        </div>
      </footer>
    </>
  )
}
