import { Timestamp, addDoc, collection } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import "./Checkout.css";
import { db } from "../../config/firebase";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  const createOrder = ({ name, lastName, phone, email }) => {
    try {
      const order = {
        buyer: {
          name,
          lastName,
          phone,
          email,
        },
        items: cart,
        total: totalPrice(),
        date: Timestamp.fromDate(new Date()),
      };

      async function uploadOrder() {
        const orderRef = collection(db, "Orders");

        const orderAdded = await addDoc(orderRef, order);

        setOrderId(orderAdded.id);
        clearCart();
      }

      if (order.buyer.name !== "") {
        uploadOrder();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (orderId) {
    return (
      <div className="Orden">
        <h1 className="checkout-titlel text-center">Muchas Gracias Por tu Compra!!</h1>
        <h3 className="checkout-title text-center">
          Su orden de compra es:{" "}
          <span className="checkout-order-id">{orderId}</span>
        </h3>
      </div>
      
    );
  }

  return (
    <div className="container">
      <h1 className="checkout-title text-center">Orden de Venta</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
}
