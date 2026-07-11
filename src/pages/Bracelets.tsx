import React from "react";
import "./ProductPage.css";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

import Brace1 from "../assets/Images/Brace1.png";
import Brace2 from "../assets/Images/Brace2.png";
import Brace3 from "../assets/Images/Brace3.png";
import Brace4 from "../assets/Images/Brace4.png";
import Brace5 from "../assets/images/Brace5.png";
import Brace6 from "../assets/Images/Brace6.png";
import Brace7 from "../assets/Images/Brace7.png";
import Brace8 from "../assets/Images/Brace8.png";
import Brace9 from "../assets/Images/Brace9.png";
import Brace10 from "../assets/Images/Brace10.png";
import Brace11 from "../assets/Images/Brace11.png";
import Brace12 from "../assets/Images/Brace12.png";
import Brace13 from "../assets/Images/Brace13.png";
import Brace14 from "../assets/Images/Brace14.png";


const Bracelets = () => {
  const { addToCart, cart } = useCart();

  const products = [
    {
      id: 101,
      name: "Silver Passionate love Bracelet",
      price: 1999,
      image: Brace1,
    },
    {
      id:102,
      name: "Silver Passionate Diamond Bracelet",
      price: 1499,
      image: Brace2,
    },
    {
      id: 103,
      name: "Gold Waves Bracelet",
      price: 1500,
      image: Brace3,
    },
    {
      id: 104,
      name: "GoldSnowfall Bracelet",
      price: 1100,
      image: Brace4,
    },
    {
      id: 105,
      name: "Gold Embrace Bracelet",
      price: 2500,
      image: Brace5,
    },
    {
      id:106,
      name: "Gold Shine Bracelet",
      price: 2000,
      image: Brace6,
    },
    {
      id:107,
      name: "Gold Glittering Bracelet",
      price: 3000,
      image: Brace7,
    },
    {
      id: 108,
      name: "Silver Queen Crown Bracelet",
      price: 2700,
      image: Brace8,
    },
    {
      id:109,
      name: "Gold Sanon Bracelet",
      price: 1190,
      image: Brace9,
    },
    {
      id: 110,
      name: "Golden Zircon Bracelet",
      price: 1900,
      image: Brace10,
    },
    {
      id: 111,
      name: "Golden Vanki Bracelet",
      price: 1599,
      image: Brace11,
    },
    {
      id: 112,
      name: "Golden Sanon Bracelet",
      price: 2600,
      image: Brace12,
    },
    {
      id: 113,
      name: "Gold Rhomb Bracelet",
      price: 1799,
      image: Brace13,
    },
    {
      id: 114,
      name: "Gold Dear Hearts Bracelet",
      price: 900,
      image: Brace14,
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

export default Bracelets;
