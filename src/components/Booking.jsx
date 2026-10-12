import { useMemo, useState } from 'react'
import { Icon, SectionHead } from './Icons.jsx'
import { ADDRESS, COMBOS, OFFERS, PHONE, PHONE_DISPLAY, TEL, WHATSAPP, comboLabel, offerLabel, rupee } from '../data.js'

const todayISO = () => {
  const d = new Date()
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10)
}

// Accepts "98765 43210", "+91 9876543210", "09876543210" etc.
const normalisePhone = (p) => p.replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '')

function validate(f) {
  const e = {}
  if (f.name.trim().length < 2) e.name = 'Please enter your name'
  if (!/^[6-9]\d{9}$/.test(normalisePhone(f.phone))) e.phone = 'Enter a valid 10-digit mobile number'
  if (!f.date) e.date = 'Pick a date'
  else if (f.date < todayISO()) e.date = 'Date cannot be in the past'
  if (!f.time) e.time = 'Pick a time'
  return e
}

const EMPTY = { name: '', phone: '', date: '', time: '', note: '' }

export default function Booking({ selection, setSelection }) {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const { who, service } = selection

  const comboOptions = useMemo(
    () => COMBOS[who].map((c) => ({ value: comboLabel(who, c), text: `${c.items.join(' + ')} — ${rupee(c.price)}` })),
    [who]
  )

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const setWho = (next) =>
    // Offers apply to both; combos are gender-specific so clear them on switch
    setSelection({ who: next, service: service.startsWith('Offer:') ? service : '' })

  const submit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length) return

    const lines = [
      "Hi Charvi Salon! I'd like to book an appointment.",
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${normalisePhone(form.phone)}`,
      `For: ${who}`,
      `Service: ${service || 'Not sure — please advise'}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      form.note.trim() && `Notes: ${form.note.trim()}`,
    ].filter((l) => l !== false && l !== undefined)

    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
    setSent(true)
  }

  const fieldProps = (key) => ({
    id: key,
    value: form[key],
    onChange: set(key),
    'aria-invalid': errors[key] ? 'true' : undefined,
    'aria-describedby': errors[key] ? `${key}-err` : undefined,
  })
  const err = (key) => errors[key] && <span className="err" id={`${key}-err`}>{errors[key]}</span>

  return (
    <section id="book" className="booking">
      <div className="container">
        <SectionHead eyebrow="Reserve Your Slot" title="Book an Appointment">
          Fill in the details and send them to us on WhatsApp — we'll confirm your slot.
        </SectionHead>
        <div className="book-card reveal">
          <div className="book-info">
            <h3>Pamper Yourself</h3>
            <p>Walk in or book ahead — we're happy to help you choose the right service or combo.</p>
            <div className="info-row">
              <div className="ic"><Icon name="phone" /></div>
              <div><small>Bookings &amp; Appointments</small><a className="big" href={TEL}>{PHONE_DISPLAY}</a></div>
            </div>
            <div className="info-row">
              <div className="ic"><Icon name="wa" /></div>
              <div><small>WhatsApp</small><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Chat with us</a></div>
            </div>
            <div className="info-row">
              <div className="ic"><Icon name="pin" /></div>
              <div><small>Suncity Branch</small><span>{ADDRESS[0]}<br />{ADDRESS[1]}</span></div>
            </div>
          </div>

          <form onSubmit={submit} noValidate>
            <h3>Your Details</h3>
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input {...fieldProps('name')} autoComplete="name" placeholder="Your name" />
              {err('name')}
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input {...fieldProps('phone')} type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile" />
              {err('phone')}
            </div>
            <fieldset className="field full">
              <legend className="legend">Appointment For</legend>
              <div className="seg">
                {['Female', 'Male'].map((g) => (
                  <label key={g}>
                    <input type="radio" name="for" value={g} checked={who === g} onChange={() => setWho(g)} />
                    <span>{g === 'Female' ? 'Her' : 'Him'}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="field full">
              <label htmlFor="service">Service / Combo</label>
              <select id="service" value={service} onChange={(e) => setSelection({ who, service: e.target.value })}>
                <option value="">Not sure — please advise</option>
                <optgroup label={`${who} Combos`}>
                  {comboOptions.map((o) => <option key={o.value} value={o.value}>{o.text}</option>)}
                </optgroup>
                <optgroup label="Today's Special Offers">
                  {OFFERS.map((o) => <option key={o.name} value={offerLabel(o)}>{o.name} — {rupee(o.price)}</option>)}
                </optgroup>
              </select>
            </div>
            <div className="field">
              <label htmlFor="date">Preferred Date</label>
              <input {...fieldProps('date')} type="date" min={todayISO()} />
              {err('date')}
            </div>
            <div className="field">
              <label htmlFor="time">Preferred Time</label>
              <input {...fieldProps('time')} type="time" />
              {err('time')}
            </div>
            <div className="field full">
              <label htmlFor="note">Notes (optional)</label>
              <textarea {...fieldProps('note')} rows="2" placeholder="Anything we should know?" />
            </div>
            <button type="submit" className="btn btn-gold"><Icon name="wa" />Send Booking on WhatsApp</button>
            {sent ? (
              <p className="form-ok" role="status">
                WhatsApp opened with your details — just tap send. Didn't open? Call us at <a href={TEL}>{PHONE_DISPLAY}</a>.
              </p>
            ) : (
              <p className="form-note">Opens WhatsApp with your booking details pre-filled.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
