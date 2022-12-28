import './Navbar.css';
import CartWidget from "./CartWidget";

const Navbar = ({name}) => {
    return (
        <header>
            <nav>
                <h1>Bienvenidos a {name}</h1>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                    <CartWidget />
                </ul>
            </nav>
        </header>
    )
}

//Puedo usar (props) => {props.name}

export default Navbar;