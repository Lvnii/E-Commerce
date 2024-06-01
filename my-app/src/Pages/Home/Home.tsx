import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import fetchProducts from "../../Store/Products/Products.async.Actions";
import earphones from '../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png'
import headphones from '../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from '../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png'
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
            <div className="triplets">
                <div className="product">
                    <img src={headphones} alt="headphones" />
                </div>
                <div className="product">
                    <img src={speakers} alt="headphones" />
                </div>
                <div className="product">
                    <img src={earphones} alt="headphones" />
                </div>
            </div>
        </div>
    )
}

export default Home;