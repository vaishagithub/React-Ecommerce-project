
import giftcard from "../assets/Images/GiftCard.webp"
import "./ProductPage.css";
import Footer from '../components/Footer'
import "./GiftCards.css"

const GiftCards = () => {
  return (
    <div>
      <img src={giftcard} alt="gift" className='giftcard'></img>
      <Footer/>
    </div>
  )
}

export default GiftCards
