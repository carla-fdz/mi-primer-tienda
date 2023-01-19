import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({name}) => {
    // console.log(props)
    return (
        <header>
            <nav className='navBar'>
                <div>
                    <Link to='/'>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '2px'}}>
                        <img alt='logo' src='./images/logo.png' width='50px' height='auto' className='logo'/>
                        <p className='brand'>{name}</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <ul className='options'>
                        <li><NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to='/'>Inicio</NavLink></li>
                        <li><NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to='/category/jewelery'>Joyeria</NavLink></li>
                        <li><NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to='/category/electronics'>Relojes</NavLink></li>
                        <li><NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to="/category/women's clothing">Accesorios</NavLink></li>
                    </ul>
                </div>
                <div>
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}

//Puedo usar (props) => {props.name}

export default Navbar;