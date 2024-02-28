import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {

    return (
        <header className="container-fluid">
            <nav className="row nav-bar">
                <div className="d-flex justify-content-center">                    
                    <Link to="/" className="mx-auto brand-name">Pro Gaming CL</Link>
                    <div className="">
                        <CartWidget/>
                    </div>
                </div>
                <div>
                    <ul className="d-flex justify-content-evenly">
                        <li className="li-link">
                            <Link to="category/tarjetas" className="category-link-nb" >Tarjetas de Video</Link>
                        </li>
                        <li className="li-link">
                            <Link to="category/procesadores"  className="category-link-nb">Procesadores</Link>
                        </li>
                        <li className="li-link">
                            <Link to="category/placas"  className="category-link-nb">Placas Madres</Link>
                        </li>
                        <li className="li-link">
                            <Link to="category/ram"  className="category-link-nb">Ram</Link>
                        </li>
                        <li className="li-link">
                            <Link to="category/discos"  className="category-link-nb">Discos Duros</Link>
                        </li>
                        <li className="li-link">
                            <Link to="category/perifericos"  className="category-link-nb">Perifericos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;