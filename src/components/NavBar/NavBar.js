import CartWidget from "../CartWidget/CartWidget"

const NavBar = ({logo}) => {
    return (
       <nav className="navbar" role="navigation" aria-label="main navigation"> 
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img src={logo} className="logo"/>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div class="buttons ">
                            <a class="navbar-item">
                                Inicio
                            </a>
                            <a class="navbar-item">
                                Productos
                            </a>
                            <a class="navbar-item">
                                Nosotros
                            </a>
                            <a class="navbar-item margen">
                                Contacto
                            </a>
                            <CartWidget/>
                        </div>
                    </div>
                </div>
            </div>
            
       </nav>
    )
}

export default NavBar