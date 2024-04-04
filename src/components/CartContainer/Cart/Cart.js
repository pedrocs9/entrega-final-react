import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function Cart() {
  const { cart, clearCart, totalQuantity, totalPrice } =
    useContext(CartContext);

  if (totalQuantity() === 0) {
    return (
      <div className="container">
        <h1 className="title-subtitle">Tu carrito de compras</h1>
        <div className="cart-list-container">
          <h3 className="cart-item-format text-center">No hay items en el carrito.</h3>
        </div>
      </div>
    );
  }
  const formattedPrice = (totalPrice()).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  return (
    <div className="container">
      <h1 className="title-subtitle">Tu carrito de compras</h1>
      <div className="cart-list-container">
        {cart.map((prod) => (
          <CartItem key={prod.id} {...prod} />
        ))}
      </div>
      <div className="cart-info-container">
        <h2 className="title-subtitle">Total: {formattedPrice} CLP</h2>
        <div>
          <button
            className="cart-button empty-cart"
            onClick={() => clearCart()}
          >
            Limpiar carrito
          </button>
          <Link to="/checkout">
            <button className="cart-button">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
