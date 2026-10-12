import { OFFERS, offerLabel, rupee } from '../data.js'

export default function Offers({ onPick }) {
  return (
    <section id="offers" className="offers">
      <div className="container">
        <div className="sec-head reveal">
          <span className="ribbon"><i />LIMITED TIME</span>
          <h2>Today's Special Offers</h2>
          <p>Indulge in our most-loved services at special prices.</p>
        </div>
        <div className="offer-grid">
          {OFFERS.map((o) => (
            <div className="offer reveal" key={o.name}>
              <div className="emo" aria-hidden="true">{o.emoji}</div>
              <h3 className="offer-name">{o.name}</h3>
              <div className="price">{rupee(o.price)}</div>
              <button type="button" className="book" onClick={() => onPick(offerLabel(o))}>Book this</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
