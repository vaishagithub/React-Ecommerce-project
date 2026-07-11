import React from "react";
import "./ProductPage.css";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import ear1 from "../assets/Images/ear1.png";
import ear2 from "../assets/Images/ear2.png";
import ear3 from "../assets/Images/ear3.png";
import ear4 from "../assets/Images/ear4.png";
import ear5 from "../assets/Images/ear5.png";
import ear6 from "../assets/Images/ear6.png";
import ear7 from "../assets/Images/ear7.png";
import ear8 from "../assets/Images/ear8.png";
import ear9 from "../assets/Images/ear9.png";
import ear10 from "../assets/Images/ear10.png";
import ear11 from "../assets/Images/ear11.png";
import ear12 from "../assets/Images/ear12.png";
import ear13 from "../assets/Images/ear13.png";
import ear14 from "../assets/Images/ear14.png";
import ear15 from "../assets/Images/ear15.png";
import { toast } from "react-toastify";

const Earrings = () => {
   const {addToCart,cart}  = useCart();
  const products = [
    {
      id: 31,
      name: "Gold  Passionate love Earrings",
      price: 999,
      image: ear1,
    },
    {
      id: 32,
      name: " Gold Passionate Diamong Earrings",
      price: 1000,
      image: ear2,
    },
    {
      id: 33,
      name: " Silver Zircon Beachy Waves Earrings",
      price: 1500,
      image: ear3,
    },
    {
      id: 34,
      name: " Gold Snowfall Earrings",
      price: 2000,
      image: ear4,
    },
    {
      id: 35,
      name: " Silver Embrace Earrings",
      price: 2500,
      image: ear5,
    },
    {
      id: 36,
      name: " Gold Shine Earrings",
      price: 2000,
      image: ear6,
    },
    {
      id: 37,
      name: "Silver Glittering Earrings",
      price: 3000,
      image: ear7,
    },
    {
      id: 38,
      name: "Silver Queen Crown Earrings",
      price: 2700,
      image: ear8,
    },
    {
      id: 39,
      name: "Gold Sanon Earrings",
      price: 2190,
      image: ear9,
    },
    {
      id: 40,
      name: " Silver Zircon Earrings",
      price: 1900,
      image: ear10,
    },
    {
      id: 41,
      name: " Golden Vanki Earrings",
      price: 1599,
      image: ear11,
    },
    {
      id: 42,
      name: "Silver Vanki Earrings",
      price: 2600,
      image: ear12,
    },
    {
      id: 43,
      name: "Gold Rhomb Earrings",
      price: 1799,
      image: ear13,
    },
    {
      id: 44,
      name: "Silver Dear Hearts Earrings",
      price: 900,
      image: ear14,
    },
    {
      id: 45,
      name: "Golden Glean Dream Earrings",
      price: 2500,
      image: ear15,
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

export default Earrings;
