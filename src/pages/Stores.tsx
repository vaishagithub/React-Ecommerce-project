
import store  from"../assets/Images/stores.webp"
import Footer from '../components/Footer'
import "./Stores.css"

const Stores = () => {
  return (
    <div className="store-container">
      <div>
       
        <img src={store} alt="store" className="store" />
      </div>

      <Footer />
    </div>
  );
}

export default Stores
