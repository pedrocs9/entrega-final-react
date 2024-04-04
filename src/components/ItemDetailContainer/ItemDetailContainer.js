import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {

    const [products, setProducts] = useState([]);

    const itemsCollection = collection(db, "Items")
    const getProducts = async () => {
        const data = await getDocs(itemsCollection);
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        const item = filteredData.find((prod) => prod.id === id);

        setProducts(item);
    };
    
    const { id } = useParams();

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <main className="main-idc">
            <div className="container">
                <ItemDetail products={products}/>
            </div>
        </main>
    );
};