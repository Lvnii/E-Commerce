import { NavLink } from "react-router-dom";
import './Header.css'
import cartImg from '../../../public/assets/shared/desktop/icon-cart.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <NavLink to={'/'} className={'header-navlink'}>
                    <img className="headline" src="../../../public/assets/home/desktop/audiophile.png" alt="" />
                </NavLink>
                <nav className="nav-bar">
                    <li>
                        <NavLink className='nav-a' to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-a' to={'/headphones'}>headphones</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-a' to={'/speakers'}>speakers</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-a' to={'/earphones'}>earphones</NavLink>
                    </li>
                </nav>
                <div className="header-cart-icon">
                    <NavLink className='nav-cart' to={'/cart'}>
                        <img className="cart-icon" src={cartImg} alt="cart-icon" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;