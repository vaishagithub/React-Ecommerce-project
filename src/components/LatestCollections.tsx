import "../pages/Pendents.css";
import ProductCard from "./ProductCard";
import ring2 from "../assets/Images/ring2.png";

import "./LatestCollections.css";
import pend5 from "../assets/Images/pend5.png";
import pend6 from "../assets/Images/pend6.png";
import pend7 from "../assets/Images/pend7.png";
import pend8 from "../assets/Images/pend8.png";
import ear4 from "../assets/Images/ear4.png";
import ear5 from "../assets/Images/ear5.png";
import ear6 from "../assets/Images/ear6.png";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const LatestCollections = () => {
  const {addToCart,cart}  = useCart();
  const products = [
    {
      id: 1,
      name: "snowfall Pendants",
      image: pend5,
      price: 999,
    },
    {
      id: 2,
      name: "Gold  Passionate love Pendants",
      price: 999,
      image: pend7,
    },
    {
      id: 3,
      name: " Silver Passionate Diamong Pendants ",
      price: 1000,
      image: pend8,
    },
    {
      id: 4,
      name: "Zircon Beachy Waves Pendants",
      price: 1500,
      image: pend6,
    },
    {
      id: 5,
      name: "Snowfall earrings",
      price: 2000,
      image: ear4,
    },
    {
      id: 6,
      name: "Snowfall earrings",
      price: 2000,
      image: ear5,
    },
    {
      id: 7,
      name: "Snowfall earrings",
      price: 2000,
      image: ear6,
    },
    {
      id: 8,
      name: "Snowfall rings",
      price: 2000,
      image: ring2,
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
    <section className="latestone">
      <h1 className="latest">Latest Collections</h1>
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
};

export default LatestCollections;
// 
