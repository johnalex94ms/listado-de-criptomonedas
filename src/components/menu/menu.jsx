import { NavLink } from 'react-router-dom'
import "../../css/menu.css";


const Menu = () => {
    return (
        <nav className="main-menu">
             <ul>
                 <li><NavLink to="/">Inicio</NavLink></li>
             </ul>
        </nav>
    )
}

export default Menu