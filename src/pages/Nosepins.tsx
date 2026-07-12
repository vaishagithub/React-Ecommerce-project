
import "./ProductPage.css";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import nose1 from "../assets/Images/nose1.png";
import nose2 from "../assets/Images/nose2.png";
import nose3 from "../assets/Images/nose3.png";
import nose4 from "../assets/Images/nose4.png";
import nose5 from "../assets/Images/nose5.png";
import nose6 from "../assets/Images/nose6.png";
import nose7 from "../assets/Images/nose7.png";
import nose8 from "../assets/Images/nose8.png";
import nose9 from "../assets/Images/nose9.png";
import nose10 from "../assets/Images/nose10.png";
import { toast } from "react-toastify";


const Nosepins = () => {
  const {addToCart,cart}  = useCart();
  const products = [
    {
      id: 81,
      name: "Gold  Passionate love nosepins",
      price: 999,
      image: nose1,
    },
    {
      id: 82,
      name: " Silver Passionate Diamong nosepins",
      price: 1000,
      image: nose2,
    },
    {
      id: 83,
      name: "Zircon Beachy Waves nosepins",
      price: 1500,
      image: nose3,
    },
    {
      id: 84,
      name: "Snowfall nosepins",
      price: 2000,
      image: nose4,
    },
    {
      id: 85,
      name: "Embrace nosepins",
      price: 2500,
      image: nose5,
    },
    {
      id: 86,
      name: "Shine nosepins",
      price: 2000,
      image: nose6,
    },
    {
      id: 87,
      name: "Glittering nosepins",
      price: 3000,
      image: nose7,
    },
    {
      id: 88,
      name: "Queen Crown nosepins",
      price: 2700,
      image: nose8,
    },
    {
      id: 89,
      name: "Sanon nosepins",
      price: 2190,
      image: nose9,
    },
    {
      id: 90,
      name: " Golden Zircon nosepins",
      price: 1900,
      image: nose10,
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

export default Nosepins;
