import { useState } from "react";
import "./ItemQuantitySelector.css";
import AddItemButton from "../AddItemButton/AddItemButton";

export default function ItemQuantitySelector( { price, products } ) {

    const [count, setCount] = useState(0);

    function handleClickAdd() {
        setCount(count + 1);
    };

    function handleClickSubstract() {
        count > 0 && setCount( count - 1 )
    }
    // Formatear el precio con separador de miles
    const formattedPrice = (price * count).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
    
    return (
        <div className="container-item-count">
            <p>Total: {formattedPrice} CLP</p>
            <div className="container-count-buttons">
                <button onClick={handleClickSubstract} className="count-button">-</button>
                <p className="count-number">{count}</p>
                <button onClick={handleClickAdd} className="count-button">+</button>
            </div>
            {
                count > 0 ? (
                <AddItemButton quantity={count} products={products}/>
                ) : (
                <button className="disabledButton">Agregar al carrito</button>
                )
            }

        </div>
    );
};