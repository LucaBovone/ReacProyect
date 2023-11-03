import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
const NavBarComponent = () => {

    return (
        <nav className="navbarcontainer">

            <ul className="navlist">
                <li><a className='titulo' href="./pages/hardware.html">Hardware</a></li>
                <li><a className='titulo' href="./pages/software.html">Software</a></li>
                <li><a className='titulo' href="./pages/armado.html">Armado</a></li>
                <li><a className='titulo' href="./pages/contacto.html">Contacto</a></li>
            </ul>
            <div className="search-bar">
                <input type="text" placeholder="Buscar" className="search-input" />
                <button className="search-button">Buscar</button>
            </div>
            <CartWidget/>
        </nav>
    )
};

export default NavBarComponent;