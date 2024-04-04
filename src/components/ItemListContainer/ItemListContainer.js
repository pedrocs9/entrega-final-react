import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList";

export default function ItemListContainer() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const itemsCollection = collection(db, "Items");

  const getProducts = async () => {
    const data = await getDocs(itemsCollection);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setProducts(filteredData);
  };

  const getProductsByCategory = async () => {
    const upperCategory = category.charAt(0).toUpperCase() + category.slice(1);
    const data = await getDocs(itemsCollection);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const newFilteredData = filteredData.filter(
      (prod) => prod.category === upperCategory
    );

    setProducts(newFilteredData);
  };

  useEffect(() => {
    const asyncFunc = category ? getProductsByCategory : getProducts;
    asyncFunc(category);
  }, [category]);

  return (
    <main>
      <h1 className="title-ilc">¡Equipate como todo un PRO!</h1>
      <ItemList products={products} />
    </main>
  );
}
