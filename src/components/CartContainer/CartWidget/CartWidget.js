import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import cart from './cart.png'

function CartWidget() {

  const {totalQuantity} = useContext(CartContext);
  return (
    <Link to="/cart" className="widget-container">
        
        <p className="cart-quantity">{totalQuantity()}</p>
        <img src={cart} alt="cart-widget" className="carrito"/>
    </Link>
  );
}

export default CartWidget;
