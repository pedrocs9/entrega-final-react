import { getProducts, getProductsByCategory } from "../../asyncMock";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ItemListContainer.css"
function ItemListContainer() {

    const {category} = useParams(); 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const asyncFunc = category ? getProductsByCategory : getProducts

        asyncFunc(category)
            .then(res => setProducts(res))
            .catch(error => console.error(error));
    }, [category]);

    

    return (
        <main>
            <h1 className="title-ilc">¡Equipate como todo un PRO!</h1>
            <div className="container container-products-ilc">
                {products.map((prod) => {
                    const formattedPrice = (prod.price).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
                    return (
                        <article key={prod.id}  className="product-card-ilc">
                            <div className="container-img-ilc">
                                <img src={prod.image} alt={prod.description} className="img-ilc"/>
                            </div>
                            <h4 className="product-name-ilc">{prod.name}</h4>
                            <h5 className="product-name-ilc">{formattedPrice}</h5>
                            <Link to={`/item/${prod.id}`} className="info-product-ilc">Ver producto</Link>
                        </article>
                    );
                })}
            </div>
        </main>
    );
}

export default ItemListContainer;