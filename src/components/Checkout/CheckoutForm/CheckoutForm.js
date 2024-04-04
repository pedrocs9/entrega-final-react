import { useState } from "react";
import "../Checkout.css";

export default function CheckoutForm({ onConfirm }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleOnConfirm(e) {
    e.preventDefault();

    const userData = {
      name,
      lastName,
      phone,
      email,
    };

    onConfirm(userData);
  }

  return (
    <div className="checkout-data container">
      <form onSubmit={handleOnConfirm}>
        <div className="checkout-labelgroup-s">
          <label>
            Nombre
            <input
              className="checkout-input"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Apellido
            <input
              className="checkout-input"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="checkout-labelgroup-l">
          <label className="checkout-label-l">
            Teléfono
            <input
              className="checkout-input input-l"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <label className="checkout-label-l">
            Email
            <input
              className="checkout-input input-l"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </label>
        </div>
        <div className="ch-bt">
          <button className="checkout-button" onClick={handleOnConfirm}>
            Crear Venta
          </button>
        </div>
      </form>
    </div>
  );
}
