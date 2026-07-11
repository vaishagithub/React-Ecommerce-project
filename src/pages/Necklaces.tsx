import React from "react";
import "./ProductPage.css";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import pend1 from "../assets/Images/pend1.png";
import pend2 from "../assets/Images/pend2.png";
import pend3 from "../assets/Images/pend3.png";
import pend4 from "../assets/Images/pend4.png";
import pend5 from "../assets/Images/pend5.png";
import pend6 from "../assets/Images/pend6.png";
import pend7 from "../assets/Images/pend7.png";
import pend8 from "../assets/Images/pend8.png";
import pend9 from "../assets/Images/pend9.png";
import pend10 from "../assets/Images/pend10.png";
import pend11 from "../assets/Images/pend11.png";
import pend12 from "../assets/Images/pend12.png";
import pend13 from "../assets/Images/pend13.png";
import pend14 from "../assets/Images/pend14.png";
import pend15 from "../assets/Images/pend15.png";
import { toast } from "react-toastify";

const Necklaces = () => {
   const {addToCart,cart}  = useCart();
  const products = [
    {
      id: 51,
      name: "Gold  Passionate love Necklaces",
      price: 999,
      image: pend1,
    },
    {
      id: 52,
      name: " Silver Passionate Diamong Necklaces",
      price: 1000,
      image: pend2,
    },
    {
      id: 53,
      name: "Zircon Beachy Waves Necklaces",
      price: 1500,
      image: pend3,
    },
    {
      id: 54,
      name: "Snowfall Necklaces",
      price: 2000,
      image: pend4,
    },
    {
      id: 55,
      name: "Embrace Necklaces",
      price: 2500,
      image: pend5,
    },
    {
      id: 56,
      name: "Shine Necklaces",
      price: 2000,
      image: pend6,
    },
    {
      id: 57,
      name: "Glittering Necklaces",
      price: 3000,
      image: pend7,
    },
    {
      id: 58,
      name: "Queen Crown Necklaces",
      price: 2700,
      image: pend8,
    },
    {
      id: 59,
      name: "Sanon Necklaces",
      price: 2190,
      image: pend9,
    },
    {
      id: 60,
      name: " Golden Zircon Necklaces",
      price: 1900,
      image: pend10,
    },
    {
      id: 61,
      name: " Golden Vanki Necklaces",
      price: 1599,
      image: pend11,
    },
    {
      id: 62,
      name: " Golden Sanon Necklaces",
      price: 2600,
      image: pend12,
    },
    {
      id: 63,
      name: "Gold Rhomb Necklaces",
      price: 1799,
      image: pend13,
    },
    {
      id: 64,
      name: "Gold Dear Hearts Necklaces",
      price: 900,
      image: pend14,
    },
    {
      id: 65,
      name: "Golden Glean Dream Necklaces",
      price: 2500,
      image: pend15,
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
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          onAddToCart={() => handleAddToCart(product)}
          isAdded={cart.some((item: any) => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default Necklaces;
