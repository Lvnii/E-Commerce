import './Footer.css'
import { NavLink } from 'react-router-dom'
import footerHero from '../../../public/assets/shared/desktop/image-best-gear.jpg'

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
        </div>
    )
}

export default Footer;