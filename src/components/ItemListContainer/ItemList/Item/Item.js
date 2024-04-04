import { Link } from "react-router-dom";

export default function Item({prod}) {
    const formattedPrice = (prod.price).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
    return (
        <article key={prod.id} className="product-card-ilc">
            <div className="container-img-ilc">
                <img src={prod.image} alt={prod.alt} className="img-ilc" />
            </div>
            <h4 className="product-name-ilc">{prod.name}</h4>
            <h5 className="product-name-ilc">{formattedPrice}</h5>
            <Link to={`/item/${prod.id}`} className="info-product-ilc">
                Ver producto
            </Link>
        </article>
    );
};