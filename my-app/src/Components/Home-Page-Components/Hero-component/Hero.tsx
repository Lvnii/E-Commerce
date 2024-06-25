import './Hero.css'
import { NavLink } from 'react-router-dom'
import heroImg from '../../../../public/assets/home/desktop/naushniki-hero.png'


const Hero = () => {

    return (
        <div className="hero-background">
            <div className="container">
                <div className="hero-head">
                    <div className="left-side">
                        <h3 className="headline">new product</h3>
                        <h1 className="head">XX99 Mark II Headphones</h1>
                        <p className="description">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <div className="button-div">
                            <NavLink to={'/product/4'} className="button-dark-cream">see product</NavLink>
                        </div>
                    </div>
                    <div className="right-side">
                        <img className="hero-image" src={heroImg} alt="heroImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;