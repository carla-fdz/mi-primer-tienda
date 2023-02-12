import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className='navBar'>
            <div>
                <Link to='/'>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '2px'}}>
                    <img alt='logo' src='/images/logo.png' width='70px' height='auto' className='logo'/>
                    </div>
                </Link>
            </div>

                <div>
                    <ul className='options'>
                        <li><NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to='/'>Inicio</NavLink></li>
                        <li><NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to='/category/corporal'>Cuidado corporal</NavLink></li>
                        <li><NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to='/category/facial'>Cuidado facial</NavLink></li>
                        <li><NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to="/category/hogar">Hogar</NavLink></li>
                    </ul>
                </div>
                <div>
                    <Link to='/cart'>
                        <CartWidget />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

//Puedo usar (props) => {props.name}

export default Navbar;