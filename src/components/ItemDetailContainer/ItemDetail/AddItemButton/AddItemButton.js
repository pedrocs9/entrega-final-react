import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";


export default function AddItemButton({quantity, products}) {

    const {addItem} = useContext(CartContext);

    function handleClick() {       
        addItem(products, quantity);
    };

    return (
        <button onClick={() => handleClick()} className="add-to-cart">Agregar al carrito</button> 
    );
};