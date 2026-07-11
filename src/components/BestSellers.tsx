import "../pages/Pendents.css";
import ProductCard  from "./ProductCard";
import ring1 from "../assets/Images/ring1.png"
import "./BestSellers.css"

import pend1 from "../assets/Images/pend1.png";
import pend2 from "../assets/Images/pend2.png";
import pend3 from "../assets/Images/pend3.png";
import pend4 from "../assets/Images/pend4.png";
import ear1 from "../assets/Images/ear1.png";
import ear2 from "../assets/Images/ear2.png";
import ear3 from "../assets/Images/ear3.png";
import img4 from "../assets/Images/Dpromise.png";
import boy from "../assets/Images/boy.webp";
import girl from "../assets/Images/girl.webp";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";



const BestSellers = () => {
  const {addToCart,cart}  = useCart();
  const products = [
    {
      id: 1,
      name: "snowfall ring",
      image: ring1,
      price: 999,
    },
    {
      id: 2,
      name: "Gold  Passionate love Ring",
      price: 999,
      image: pend1,
    },
    {
      id: 3,
      name: " Silver Passionate Diamong Ring",
      price: 1000,
      image: pend2,
    },
    {
      id: 4,
      name: "Zircon Beachy Waves Ring",
      price: 1500,
      image: pend3,
    },
    {
      id: 5,
      name: "Snowfall earrings",
      price: 2000,
      image: ear1,
    },
    {
      id: 6,
      name: "Snowfall earrings",
      price: 2000,
      image: ear2,
    },
    {
      id: 7,
      name: "Snowfall earrings",
      price: 2000,
      image: ear3,
    },
    {
      id: 8,
      name: "Snowfall pendent",
      price: 2000,
      image: pend4,
    },
  ];
  const handleAddToCart = (product: any) => {
        const alreadyInCart = cart.some((item: any) => item.id === product.id);
    
        if (alreadyInCart) {
          toast.info("Item already in cart");
          return;
        }
    
        addToCart(product);
        toast.success(`${product.name} added to cart`);
      };
  return (
    <section className="best-section">
      <div>
        <img src={img4} alt="imagetab" className="fourtab" />
      </div>
      <div className="human">
        <img src={boy} alt="boy" />
        <img src={girl} alt="girl" />
      </div>
      <h1 className="best">BestSellers</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </section>
  );
}

export default BestSellers
//  return (
//    <div className="products-container">
//      {products.map((product) => (
//        <ProductCard
//          key={product.id}
//          image={product.image}
//          name={product.name}
//          price={product.price}
//        />
//      ))}
//    </div>
//  );
