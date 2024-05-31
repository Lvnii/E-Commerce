import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h3>audiophile</h3>
            <nav className="nav-bar">
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/headphones'}>headphones</NavLink>
                </li>
                <li>
                    <NavLink to={'/speakers'}>speakers</NavLink>
                </li>
                <li>
                    <NavLink to={'/earphones'}>earphones</NavLink>
                </li>
            </nav>
        </div>
    )
}

export default Header;