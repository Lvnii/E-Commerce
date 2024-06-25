import './Footer.css'
import { NavLink } from 'react-router-dom'
import footerHero from '../../../public/assets/shared/desktop/image-best-gear.jpg'
import facebook from '../../../public/assets/shared/desktop/icon-facebook.svg'
import instagram from '../../../public/assets/shared/desktop/icon-instagram.svg'
import twitter from '../../../public/assets/shared/desktop/icon-twitter.svg'

const Footer = () => {

    return (
        <div className='footer'>
            <div className='container'>
                <div className="suggestion">
                    <div className="left-side">
                        <h1 className='headline'>Bringing you the <span>best</span> audio gear</h1>
                        <p className='text'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                    </div>
                    <div className="right-side">
                        <img src={footerHero} alt="footerheroimg" />
                    </div>
                </div>
            </div>
            <div className="wide-footer">
                <div className="orange-square"></div>
                <div className="container">
                    <div className="left-side">
                        <NavLink to={'/'} className={'footer-navlink'}>
                            <img className="headline" src="../../../public/assets/home/desktop/audiophile.png" alt="" />
                        </NavLink>
                        <p className='text'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>                    
                        <p className='copyright'>Copyright 2021. All Rights Reserved</p>
                    </div>
                    <div className="right-side">
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
                        <div className="icons">
                            <NavLink className={'icon'} to={'https://www.facebook.com/'}>
                                <img src={facebook} alt="facebook" />
                            </NavLink>
                            <NavLink className={'icon'} to={'https://x.com/'}>
                                <img src={twitter} alt="twitter" />
                            </NavLink>
                            <NavLink className={'icon'} to={'www.instagram.com/'}>
                                <img src={instagram} alt="instagram" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;