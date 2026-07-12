import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";
import "./Cart.css";
import type { CartItem } from "../types/Product";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const total = cart.reduce(
    (sum:number, item:CartItem) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <>
          {cart.map((item: CartItem) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>
                  ₹{item.price} × {item.quantity}
                </p>
                <p>
                  <strong>Subtotal: ₹{item.price * item.quantity}</strong>
                </p>
               
                <div className="quantity">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>

              <button
                className="remove"
                onClick={() => removeFromCart(item.id)}
              >
                <FontAwesomeIcon icon={faXmark}  className="xmark"/>
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total: ₹{total}</h2>
            <button>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
