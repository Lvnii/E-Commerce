import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import fetchProducts from "../../Store/Products/Products.async.Actions";
import earphones from '../../../public/assets/shared/desktop/earphone-thumbnail.png'
import headphones from '../../../public/assets/shared/desktop/headphone-thumbnail.png'
import speakers from '../../../public/assets/shared/desktop/speaker-thumbnail.png'
import rightArrow from '../../../public/assets/shared/desktop/icon-arrow-right.svg'
import thumbShadow from '../../../public/assets/shared/desktop/thumbnail-shadow.png'
import zx9Thumb from '../../../public/assets/shared/desktop/zx9-speaker.png'
import circleSpeaker from '../../../public/assets/home/desktop/pattern-circles.svg'
import yx1Thumb from '../../../public/assets/home/desktop/yx1-thumbnail.png'
import './Home.css'

const Home = () => {
    const data = useAppSelector((state) => state.products.data)
    const status = useAppSelector((state) => state.products.status)
    const dispatch = useAppDispatch();

    useEffect (() => {
        dispatch(fetchProducts());
    }, [dispatch])

    if (status === 'failed') return <div>Error Happened!</div>

    return (
        <div className="home-page">
            {/***************     hero    *****************/}

            <div className="hero-head">
                <div className="left-side">
                    <h3 className="headline">new product</h3>
                    <h1 className="head">XX99 Mark II Headphones</h1>
                    <p className="description">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <div className="button-div">
                        <button className="button-dark-cream">see product</button>
                    </div>
                </div>
            </div>

            {/***************     triplets    *****************/}

            <div className="triplets">
                <div className="product">
                    <div className="product-icon-div">
                        <img className="thumbnail-icon" src={headphones} alt="headphones" />
                        <img className="thumbnail-shadow" src={thumbShadow} alt="shadow" />
                    </div>
                    <div className="inside-product">
                        <h4 className="headline">headphones</h4>
                        <div className="button-div">
                            <button className="triplet-button">shop</button>
                            <img className="right-svg" src={rightArrow} alt="arrow" />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="product-icon-div">
                        <img className="thumbnail-icon" src={speakers} alt="speakers" />
                        <img className="thumbnail-shadow"  src={thumbShadow} alt="shadow" />
                    </div>
                    <div className="inside-product">
                        <h4 className="headline">speakers</h4>
                        <div className="button-div">
                            <button className="triplet-button">shop</button>
                            <img className="right-svg" src={rightArrow} alt="arrow" />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="product-icon-div">
                        <img className="thumbnail-icon" src={earphones} alt="earphones" />
                        <img className="thumbnail-shadow" src={thumbShadow} alt="shadow" />
                    </div>
                    <div className="inside-product">
                        <h4 className="headline">earphones</h4>
                        <div className="button-div">
                            <button className="triplet-button">shop</button>
                            <img className="right-svg" src={rightArrow} alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>

            {/***************     ZX9 SPEAKER    *****************/}

            <div className="zx9-thumbnail">
                <div className="left-side">
                    <div>
                        <img className="zx9-image" src={zx9Thumb} alt="zx9-img" />
                    </div>
                    <img className="circles" src={circleSpeaker} alt="circles" />
                </div>
                <div className="right-side">
                    <h1 className="headline">zx9 speaker</h1>
                    <p className="text">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <div className="button-div">
                        <button className="button-dark-black">see product</button>
                    </div>
                </div>
            </div>

            {/***************     ZX7 SPEAKER    *****************/}

            <div className="zx7-thumbnail">
                <div className="left-side">
                    <p className="headline">zx7 speaker</p>
                    <div className="button-div">
                        <button className="button-transparent-black">see product</button>
                    </div>
                </div>
            </div>

            {/***************     YX1 EARPHONES    *****************/}

            <div className="yx1-thumbnail">
                <div className="image-div">
                    <img src={yx1Thumb} alt="image-yx1" />
                </div>
                <div className="right-side">
                    <h1 className="headline">YX1 EARPHONES</h1>
                    <div className="button-div">
                        <button className="button-transparent-black">see product</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;