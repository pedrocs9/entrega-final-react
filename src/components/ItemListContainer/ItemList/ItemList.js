import Item from "./Item/Item";

export default function ItemList({ products }) {
    return (
        <div className="container container-products-ilc">
            {products.map((prod) => <Item key={prod.id} prod={prod}/>)}
        </div>
    );
};