import { useRef, useState } from 'react'
import { Icon, SectionHead } from './Icons.jsx'
import { COMBOS, comboLabel, rupee } from '../data.js'

const TABS = [
  { who: 'Female', label: '♀ Female Combos' },
  { who: 'Male', label: '♂ Male Combos' },
]

export default function Combos({ onPick }) {
  const [active, setActive] = useState('Female')
  const tabRefs = useRef({})

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern)
  const onKeyDown = (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    const next = TABS[(TABS.findIndex((t) => t.who === active) + 1) % TABS.length].who
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="combos" className="combos">
      <Icon name="leaf" className="leaf l1" />
      <div className="container combos-inner">
        <SectionHead eyebrow="Exclusive" title="Combo Offers for Him & Her">
          More care, better value. Pick a package that fits your mood.
        </SectionHead>
        <div className="tabs reveal" role="tablist" aria-label="Combo packages">
          {TABS.map((t) => (
            <button
              key={t.who}
              ref={(el) => (tabRefs.current[t.who] = el)}
              role="tab"
              id={`tab-${t.who}`}
              aria-selected={active === t.who}
              aria-controls={`panel-${t.who}`}
              tabIndex={active === t.who ? 0 : -1}
              className={`tab${active === t.who ? ' active' : ''}`}
              onClick={() => setActive(t.who)}
              onKeyDown={onKeyDown}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="combo-list active" role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`} key={active}>
          {COMBOS[active].map((c, i) => (
            <div className="combo" key={i}>
              <div className="num">{String(i + 1).padStart(2, '0')}</div>
              <div className="items">
                <div className="lbl">{active === 'Male' ? 'For Him' : 'For Her'} · {c.items.length} services</div>
                <ul>{c.items.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
              <div className="cprice">
                <b>{rupee(c.price)}</b>
                <button type="button" onClick={() => onPick(comboLabel(active, c), active)}>Book combo</button>
              </div>
            </div>
          ))}
        </div>
        <p className="combo-note">* Combo offers valid only at Suncity Branch.</p>
      </div>
    </section>
  )
}
