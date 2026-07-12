
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import ring1 from "../assets/Images/ring1.png";
import ring2 from "../assets/Images/ring2.png";
import ring3 from "../assets/Images/ring3.png";
import ring4 from "../assets/Images/ring4.png";
import ring5 from "../assets/images/ring5.png";
import ring6 from "../assets/Images/ring6.png";
import ring7 from "../assets/Images/ring7.png";
import ring8 from "../assets/Images/ring8.png";
import ring9 from "../assets/Images/ring9.png";
import ring10 from "../assets/Images/ring10.png";
import ring11 from "../assets/Images/ring11.png";
import ring12 from "../assets/Images/ring12.png";
import ring13 from "../assets/Images/ring13.png";
import ring14 from "../assets/Images/ring14.png";
import ring15 from "../assets/Images/ring15.png";
import { toast } from "react-toastify";

import "./ProductPage.css";


const Rings = () => {
  const {addToCart,cart}  = useCart();
  
  const products = [
    {
      id: 1,
      name: "Gold  Passionate love Ring",
      price: 999,
      image: ring1,
    },
    {
      id: 2,
      name: " Silver Passionate Diamong Ring",
      price: 1000,
      image: ring2,
    },
    {
      id: 3,
      name: "Zircon Beachy Waves Ring",
      price: 1500,
      image: ring3,
    },
    {
      id: 4,
      name: "Snowfall Ring",
      price: 2000,
      image: ring4,
    },
    {
      id: 5,
      name: "Embrace Ring",
      price: 2500,
      image: ring5,
    },
    {
      id: 6,
      name: "Shine Ring",
      price: 2000,
      image: ring6,
    },
    {
      id: 7,
      name: "Glittering Ring",
      price: 3000,
      image: ring7,
    },
    {
      id: 8,
      name: "Queen Crown Ring",
      price: 2700,
      image: ring8,
    },
    {
      id: 9,
      name: "Sanon Ring",
      price: 2190,
      image: ring9,
    },
    {
      id: 10,
      name: " Golden Zircon Ring",
      price: 1900,
      image: ring10,
    },
    {
      id: 11,
      name: " Golden Vanki Ring",
      price: 1599,
      image: ring11,
    },
    {
      id: 12,
      name: " Golden Sanon Ring",
      price: 2600,
      image: ring12,
    },
    {
      id: 13,
      name: "Gold Rhomb Ring",
      price: 1799,
      image: ring13,
    },
    {
      id: 14,
      name: "Gold Dear Hearts Rings",
      price: 900,
      image: ring14,
    },
    {
      id: 15,
      name: "Golden Glean Dream Ring",
      price: 2500,
      image: ring15,
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
    <div className="products-container">
      {/* <Navbar/> */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          onAddToCart={() => handleAddToCart(product)}
          isAdded={cart.some((item: any) => item.id === product.id)}
          // cartItem={cart.find((item: any) => item.id === product.id)}
        />
      ))}
    </div>
  );
}

export default Rings
