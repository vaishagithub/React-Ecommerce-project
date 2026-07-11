import "./ProductCard.css";
import { useCart } from "../context/CartContext";
type ProductCardProps = {
  image: string;
  name: string;
  price: number;
  onAddToCart: () => void;
  isAdded : boolean;
 
}; 


const ProductCard = ({image,name,price,onAddToCart,isAdded,}:ProductCardProps) => {
 
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Rs{price}</p>

      
      <button onClick={onAddToCart} disabled={isAdded}>
        {isAdded ? "✓ Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard
