// Photos: Unsplash (free to use under the Unsplash License)
import gelNails from './assets/photos/gel-nails.jpg'
import hairSpa from './assets/photos/hair-spa.jpg'
import dTan from './assets/photos/d-tan.jpg'
import bleach from './assets/photos/bleach.jpg'
import waxing from './assets/photos/waxing.jpg'
import cleanUp from './assets/photos/clean-up.jpg'
import facial from './assets/photos/facial.jpg'
import pedicure from './assets/photos/pedicure.jpg'
import manicure from './assets/photos/manicure.jpg'
import bodyMassage from './assets/photos/body-massage.jpg'
import threading from './assets/photos/cat-beauty.jpg'
import footMassage from './assets/photos/f-foot-massage.jpg'
import mHaircut from './assets/photos/m-haircut.jpg'
import mBeard from './assets/photos/m-beard.jpg'
import mHeadMassage from './assets/photos/m-head-massage.jpg'
import mHydraFacial from './assets/photos/m-hydra-facial.jpg'
import mHairSpa from './assets/photos/m-hair-spa.jpg'

export const PHONE = '917042202057'
export const PHONE_DISPLAY = '70422 02057'
export const TEL = 'tel:+917042202057'
export const WHATSAPP = `https://wa.me/${PHONE}`
export const ADDRESS = ['Shop No 34, Suncity Society,', 'Near B Block Entry Gate']
export const MAPS_QUERY = 'Charvi Salon Suncity'

export const OFFERS = [
  { img: gelNails, name: 'Gel Nail Paint', price: 400 },
  { img: hairSpa, name: 'Hair Spa', price: 599 },
  { img: dTan, name: 'D-Tan', price: 350 },
  { img: bleach, name: 'Bleach', price: 250 },
  { img: waxing, name: 'Waxing', price: 800 },
  { img: cleanUp, name: 'Clean-Up', price: 400 },
  { img: facial, name: 'Facial', price: 800 },
  { img: pedicure, name: 'Pedicure', price: 450 },
  { img: manicure, name: 'Manicure', price: 350 },
  { img: bodyMassage, name: 'Body Massage', price: 799 },
]

export const COMBOS = {
  Female: [
    { items: ['D-Tan', 'Threading', 'Foot Massage'], price: 499, img: threading },
    { items: ['D-Tan', 'Normal Waxing', 'Threading'], price: 899, img: dTan },
    { items: ['D-Tan', 'Waxing', 'Foot Massage'], price: 1199, img: footMassage },
    { items: ['Facial', 'Waxing', 'D-Tan', 'Threading', 'Foot Massage'], price: 1599, img: facial },
    { items: ['Facial', 'Manicure', 'Pedicure', 'Threading', 'Foot Massage'], price: 1599, img: manicure },
    { items: ['Hair Spa', 'Facial', 'Waxing', 'Threading', 'Foot Massage'], price: 1999, img: hairSpa },
  ],
  Male: [
    { items: ['Hair Cut', 'Beard', 'D-Tan'], price: 450, img: mHaircut },
    { items: ['Hair Cut', 'Beard', 'D-Tan', 'Foot Massage'], price: 550, img: mBeard },
    { items: ['Hair Cut', 'Beard', 'Clean Up', 'Head Massage', 'Foot Massage'], price: 999, img: mHeadMassage },
    { items: ['Hair Cut', 'Beard', 'Hydra Facial', 'Foot Massage'], price: 1499, img: mHydraFacial },
    { items: ['Hair Cut', 'Beard', 'Hair Spa', 'Facial'], price: 1999, img: mHairSpa },
  ],
}

export const rupee = (n) => '₹' + n.toLocaleString('en-IN')
export const offerLabel = (o) => `Offer: ${o.name} (${rupee(o.price)})`
export const comboLabel = (who, c) => `${who} Combo: ${c.items.join(' + ')} (${rupee(c.price)})`
