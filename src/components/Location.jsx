import { Icon, SectionHead } from './Icons.jsx'
import { ADDRESS, MAPS_QUERY, PHONE_DISPLAY, TEL } from '../data.js'

const q = encodeURIComponent(MAPS_QUERY)

export default function Location() {
  return (
    <section id="contact">
      <div className="container">
        <SectionHead eyebrow="Visit Us" title="Find Charvi Salon" />
        <div className="loc-grid">
          <div className="loc-card reveal">
            <span className="script">Only at</span>
            <h3>Suncity Branch</h3>
            <address>{ADDRESS[0]}<br />{ADDRESS[1]}</address>
            <div className="info-row">
              <div className="ic"><Icon name="phone" /></div>
              <div><small>Call</small><a href={TEL} className="loc-phone">+91 {PHONE_DISPLAY}</a></div>
            </div>
            <div className="btns">
              <a className="btn btn-dark" target="_blank" rel="noopener noreferrer"
                href={`https://www.google.com/maps/search/?api=1&query=${q}`}>
                <Icon name="pin" />Get Directions
              </a>
              <a className="btn btn-gold" href={TEL}><Icon name="phone" />Call Now</a>
            </div>
          </div>
          <div className="map reveal">
            <iframe title="Charvi Salon location on Google Maps" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${q}&output=embed`} />
          </div>
        </div>
      </div>
    </section>
  )
}
