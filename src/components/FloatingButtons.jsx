import { Icon } from './Icons.jsx'
import { TEL, WHATSAPP } from '../data.js'

const greeting = encodeURIComponent("Hi Charvi Salon, I'd like to book an appointment.")

export default function FloatingButtons() {
  return (
    <div className="fab">
      <a className="wa" href={`${WHATSAPP}?text=${greeting}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><Icon name="wa" /></a>
      <a className="call" href={TEL} aria-label="Call Charvi Salon"><Icon name="phone" /></a>
    </div>
  )
}
