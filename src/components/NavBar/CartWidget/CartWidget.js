import "./CartWidget.css"
import cart from './cart.png'


function CartWidget() {
    return (
        <div className="d-flex">
         <p className="numero-carrito">3</p> 
        <img src={cart} alt="cart-widget" className="carrito"/>
        
    </div>
    );
}

export default CartWidget;