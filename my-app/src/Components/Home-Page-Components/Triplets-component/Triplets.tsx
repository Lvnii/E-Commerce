import { NavLink } from "react-router-dom";
import './Triplets.css'
import earphones from '../../../../public/assets/shared/desktop/earphone-thumbnail.png'
import headphones from '../../../../public/assets/shared/desktop/headphone-thumbnail.png'
import speakers from '../../../../public/assets/shared/desktop/speaker-thumbnail.png'
import rightArrow from '../../../../public/assets/shared/desktop/icon-arrow-right.svg'
import thumbShadow from '../../../../public/assets/shared/desktop/thumbnail-shadow.png'

const Triplets = () => {

    return (
        <div className="container">

            <div className="triplets">
                <div className="product ">
                    <div className="product-icon-div">
                        <img className="thumbnail-icon" src={headphones} alt="headphones" />
                        <img className="thumbnail-shadow" src={thumbShadow} alt="shadow" />
                    </div>
                    <div className="inside-product">
                        <h4 className="headline">headphones</h4>
                        <div className="button-div">
                            <NavLink to={'/product/headphones'} className="triplet-button">shop</NavLink>
                            <img className="right-svg" src={rightArrow} alt="arrow" />
                        </div>
                    </div>
                </div>
                <div className="product1">
                    <div className="product-icon-div">
                        <img className="thumbnail-icon" src={speakers} alt="speakers" />
                        <img className="thumbnail-shadow"  src={thumbShadow} alt="shadow" />
                    </div>
                    <div className="inside-product">
                        <h4 className="headline">speakers</h4>
                        <div className="button-div">
                            <NavLink to={'/product/speakers'} className="triplet-button">shop</NavLink>
                            <img className="right-svg" src={rightArrow} alt="arrow" />
                        </div>
                    </div>
                </div>
                <div className="product2">
                    <div className="product-icon-div">
                        <img className="thumbnail-icon" src={earphones} alt="earphones" />
                        <img className="thumbnail-shadow" src={thumbShadow} alt="shadow" />
                    </div>
                    <div className="inside-product">
                        <h4 className="headline">earphones</h4>
                        <div className="button-div">
                            <NavLink to={'/product/earphones'} className="triplet-button">
                                <p className="button-text">shop</p>
                                <img className="right-svg" src={rightArrow} alt="arrow" />    
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Triplets;