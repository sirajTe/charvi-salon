import { SectionHead } from './Icons.jsx'
import hair from '../assets/photos/cat-hair.jpg'
import skin from '../assets/photos/cat-skin.jpg'
import beauty from '../assets/photos/cat-beauty.jpg'
import wellness from '../assets/photos/cat-wellness.jpg'

const svgProps = { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

const CATEGORIES = [
  {
    title: 'Hair Care',
    img: hair,
    text: 'Haircuts, beard styling, hair spa & head massage',
    icon: <svg {...svgProps}><path d="M20 5c-7 0-11 6-11 13 0 9 3 15 3 17M20 5c7 0 11 6 11 13 0 9-3 15-3 17M14 12c2 4 6 6 12 6" /></svg>,
  },
  {
    title: 'Skin Care',
    img: skin,
    text: 'Facials, hydra facial, clean-up, D-Tan & bleach',
    icon: <svg {...svgProps}><circle cx="20" cy="18" r="11" /><path d="M15 16h.01M25 16h.01M15 23c3 2 7 2 10 0M12 36c2-4 5-5 8-5s6 1 8 5" /></svg>,
  },
  {
    title: 'Beauty Care',
    img: beauty,
    text: 'Waxing, threading, manicure, pedicure & gel nails',
    icon: <svg {...svgProps}><path d="M20 8c3 4 3 10 0 16-3-6-3-12 0-16zM20 24c-5-1-9-5-11-11 5 0 9 4 11 11zM20 24c5-1 9-5 11-11-5 0-9 4-11 11zM8 26c4 3 8 4 12 4s8-1 12-4" /></svg>,
  },
  {
    title: 'Wellness',
    img: wellness,
    text: 'Body massage, foot massage & relaxing therapies',
    icon: <svg {...svgProps}><path d="M10 32C10 18 18 8 32 8c0 14-8 22-20 22M10 32l12-12" /></svg>,
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <SectionHead eyebrow="Pamper Yourself" title="Our Expertise" divider>
          Complete care under one roof — from a sharp haircut to a relaxing spa, for him and for her.
        </SectionHead>
        <div className="cats">
          {CATEGORIES.map((c) => (
            <div className="cat reveal" key={c.title}>
              <div className="cat-img">
                <img src={c.img} alt={c.title} width="800" height="600" loading="lazy" decoding="async" />
              </div>
              <div className="ic">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
