import { useParams } from "react-router-dom";
import productList from "../../asyncMock";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {

    const {id} = useParams();
    const item = productList.find((prod) => prod.id === id);
    const {name, category, price, alt, description, image} = item;
    const formattedPrice = (price).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

    return (
        <main className="main-idc">
            <div className="container">
                <article >
                    <h1 className="title-idc">{name}</h1>
                    <h4 className="subtitle-idc">Categoría: {category}</h4>
                    <div className="container-info-idc">
                        <div className="container-image">
                            <img src={image} alt={alt} className="img-idc"/>
                        </div>
                        <div className="desc-container-idc">
                            <p className="description-idc">{description}</p>
                            <p className="description-idc">{formattedPrice}</p>
                            <ItemCount price={price} className="count-idc"/>
                        </div>
                    </div> 
                </article>
            </div>
        </main>
    );
};

export default ItemDetailContainer;