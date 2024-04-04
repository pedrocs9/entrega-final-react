import "../Cart/Cart.css";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

export default function CartItem({ id, name, price, image, quantity }) {

    const {removeItem} = useContext(CartContext);
    const formattedPrice = (price).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
    const formattedPrice2 = (price * quantity).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

  return (
    <div key={id} className="cart-item-container">
      <img className="cart-item-img" src={image} />
        <div className="cart-item-format col-2">
          <h4>Producto</h4>
          <h5>{name}</h5>
        </div>
        <div className="cart-item-format col-2">
          <h4>Cantidad</h4>
          <h5>{quantity}</h5>
        </div>
        <div className="cart-item-format col-2">
          <h4>Precio unitario</h4>
          <h5>{formattedPrice}</h5>
        </div>
        <div className="cart-item-format col-2">
          <h4>Subtotal</h4>
          <h5>{formattedPrice2}</h5>
        </div>
        <div className="cart-item-format col-2">
          <button onClick={() => removeItem(id)} className="cart-item-remove">X</button>
        </div>

      
    </div>
  );
}
