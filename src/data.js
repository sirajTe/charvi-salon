export const PHONE = '917042202057'
export const PHONE_DISPLAY = '70422 02057'
export const TEL = 'tel:+917042202057'
export const WHATSAPP = `https://wa.me/${PHONE}`
export const ADDRESS = ['Shop No 34, Suncity Society,', 'Near B Block Entry Gate']
export const MAPS_QUERY = 'Charvi Salon Suncity'

export const OFFERS = [
  { emoji: '💅', name: 'Gel Nail Paint', price: 400 },
  { emoji: '💆‍♀️', name: 'Hair Spa', price: 599 },
  { emoji: '✨', name: 'D-Tan', price: 350 },
  { emoji: '🌸', name: 'Bleach', price: 250 },
  { emoji: '🧖‍♀️', name: 'Waxing', price: 800 },
  { emoji: '🧴', name: 'Clean-Up', price: 400 },
  { emoji: '💖', name: 'Facial', price: 800 },
  { emoji: '🦶', name: 'Pedicure', price: 450 },
  { emoji: '💅', name: 'Manicure', price: 350 },
  { emoji: '💆', name: 'Body Massage', price: 799 },
]

export const COMBOS = {
  Female: [
    { items: ['D-Tan', 'Threading', 'Foot Massage'], price: 499 },
    { items: ['D-Tan', 'Normal Waxing', 'Threading'], price: 899 },
    { items: ['D-Tan', 'Waxing', 'Foot Massage'], price: 1199 },
    { items: ['Facial', 'Waxing', 'D-Tan', 'Threading', 'Foot Massage'], price: 1599 },
    { items: ['Facial', 'Manicure', 'Pedicure', 'Threading', 'Foot Massage'], price: 1599 },
    { items: ['Hair Spa', 'Facial', 'Waxing', 'Threading', 'Foot Massage'], price: 1999 },
  ],
  Male: [
    { items: ['Hair Cut', 'Beard', 'D-Tan'], price: 450 },
    { items: ['Hair Cut', 'Beard', 'D-Tan', 'Foot Massage'], price: 550 },
    { items: ['Hair Cut', 'Beard', 'Clean Up', 'Head Massage', 'Foot Massage'], price: 999 },
    { items: ['Hair Cut', 'Beard', 'Hydra Facial', 'Foot Massage'], price: 1499 },
    { items: ['Hair Cut', 'Beard', 'Hair Spa', 'Facial'], price: 1999 },
  ],
}

export const rupee = (n) => '₹' + n.toLocaleString('en-IN')
export const offerLabel = (o) => `Offer: ${o.name} (${rupee(o.price)})`
export const comboLabel = (who, c) => `${who} Combo: ${c.items.join(' + ')} (${rupee(c.price)})`
