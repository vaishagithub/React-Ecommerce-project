import type { Product } from "../types/Product";

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

const Pendents = () => {
  const { addToCart, cart } = useCart();
  const products = [
    {
      id: 21,
      name: "Gold  Passionate love pendents",
      price: 999,
      image: pend1,
    },
    {
      id: 22,
      name: " Silver Passionate Diamong  pendents",
      price: 1000,
      image: pend2,
    },
    {
      id: 23,
      name: "Zircon Beachy Waves  pendents",
      price: 1500,
      image: pend3,
    },
    {
      id: 24,
      name: "Snowfall  pendents",
      price: 2000,
      image: pend4,
    },
    {
      id: 25,
      name: "Embrace  pendents",
      price: 2500,
      image: pend5,
    },
    {
      id: 26,
      name: "Shine  pendents",
      price: 2000,
      image: pend6,
    },
    {
      id: 27,
      name: "Glittering  pendents",
      price: 3000,
      image: pend7,
    },
    {
      id: 28,
      name: "Queen Crown  pendents",
      price: 2700,
      image: pend8,
    },
    {
      id: 29,
      name: "Sanon  pendents",
      price: 2190,
      image: pend9,
    },
    {
      id: 30,
      name: " Golden Zircon  pendents",
      price: 1900,
      image: pend10,
    },
    {
      id: 31,
      name: " Golden Vanki  pendents",
      price: 1599,
      image: pend11,
    },
    {
      id: 32,
      name: " Golden Sanon  pendents",
      price: 2600,
      image: pend12,
    },
    {
      id: 33,
      name: "Gold Rhomb  pendents",
      price: 1799,
      image: pend13,
    },
    {
      id: 34,
      name: "Gold Dear Hearts  pendents",
      price: 900,
      image: pend14,
    },
    {
      id: 35,
      name: "Golden Glean Dream  pendents",
      price: 2500,
      image: pend15,
    },
  ];
  const handleAddToCart = (product: Product) => {
    const alreadyInCart = cart.some((item) => item.id === product.id);

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
          isAdded={cart.some((item) => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default Pendents;
