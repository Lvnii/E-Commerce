import './Yx1-earphone.css'
import { NavLink } from 'react-router-dom'
import yx1Thumb from '../../../../public/assets/home/desktop/yx1-thumbnail.png'

const Yx1Earphone = () => {

    return (
        <div className="container">
            <div className="yx1-thumbnail">
                <div className="image-div">
                        <img src={yx1Thumb} alt="image-yx1" />
                    </div>
                    <div className="right-side">
                        <h1 className="headline">YX1 EARPHONES</h1>
                        <div className="button-div">
                        <NavLink to={'/product/1'} className="button-transparent">see product</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Yx1Earphone;