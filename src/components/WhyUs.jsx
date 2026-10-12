import poster from '../assets/combo-offers.jpg'
import { Icon } from './Icons.jsx'

const s = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', 'aria-hidden': true }

const REASONS = [
  { title: 'Skilled Professionals', text: 'Trained stylists and beauticians who listen to what you want.', icon: <svg {...s}><path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z" /></svg> },
  { title: 'Hygiene First', text: 'Clean, sanitised tools and a fresh, comfortable space.', icon: <svg {...s}><path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z" /></svg> },
  { title: 'Honest Pricing', text: 'Value-packed combos with clear prices — no surprises.', icon: <svg {...s}><path d="M20 12l-8 8-9-9V3h8z" /><circle cx="7.5" cy="7.5" r="1.5" /></svg> },
  { title: 'Right in Your Society', text: 'Conveniently located near B Block Entry Gate, Suncity Society.', icon: <Icon name="pin" /> },
]

export default function WhyUs() {
  return (
    <section id="why">
      <div className="container why-wrap">
        <div className="poster-frame reveal">
          <div className="poster">
            <img src={poster} width="1000" height="938" loading="lazy" decoding="async"
              alt="Charvi Salon combo offers poster with male and female packages" />
          </div>
        </div>
        <div className="why-text reveal">
          <div className="sec-head">
            <div className="eyebrow">Because You Deserve The Best</div>
            <h2>Why Charvi Salon?</h2>
          </div>
          <div className="why-list">
            {REASONS.map((r) => (
              <div className="why-item" key={r.title}>
                <div className="ic">{r.icon}</div>
                <div><h3>{r.title}</h3><p>{r.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
