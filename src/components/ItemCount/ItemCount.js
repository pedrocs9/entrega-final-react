import { useState } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";

function ItemCount( { price } ) {

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
            
            <div className="container-count-buttons">
                <button onClick={handleClickSubstract} className="count-button">-</button>
                <p className="count-number">{count}</p>
                <button onClick={handleClickAdd} className="count-button">+</button>
            </div>
            <div className="column">
                <button className="add-to-cart">Agregar al carrito</button>
                <Link to={`/`} className="add-to-cart2">Volver</Link>
            </div>
            <div className="price">
                <p>Total: {formattedPrice} CLP</p>
            </div>
            
            
        </div>
    );
};

export default ItemCount;