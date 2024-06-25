import { NavLink } from "react-router-dom";
import './ZX7-Speaker.css'

const Zx7Speaker = () => {

    return (
        <div className="container">
            <div className="zx7-thumbnail">
                <div className="left-side">
                    <p className="headline">zx7 speaker</p>
                    <div className="button-div">
                        <NavLink to={'/product/5'} className="button-transparent">see product</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Zx7Speaker;