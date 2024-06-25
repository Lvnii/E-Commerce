import './zx9-speaker.css'
import { NavLink } from "react-router-dom";
import zx9Thumb from '../../../../public/assets/shared/desktop/zx9-speaker.png'
import circleSpeaker from '../../../../public/assets/home/desktop/pattern-circles.svg'

const Zx9Speaker = () => {

    return (
        <div className="container">
            <div className="zx9-thumbnail">
                <div className="left-side">
                    <div className="image-div">
                        <img className="zx9-image" src={zx9Thumb} alt="zx9-img" />
                        <img className="circles" src={circleSpeaker} alt="circles" />
                    </div>
                </div>
                <div className="right-side">
                    <h1 className="headline">zx9 speaker</h1>
                    <p className="text">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <div className="button-div">
                        <NavLink to={'/product/6'} className="button-dark-black">see product</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Zx9Speaker;