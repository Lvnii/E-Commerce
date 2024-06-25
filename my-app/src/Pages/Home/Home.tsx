import './Home.css'
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import fetchProducts from "../../Store/Products/Products.async.Actions";
import Hero from "../../Components/Home-Page-Components/Hero-component/Hero";
import Triplets from "../../Components/Home-Page-Components/Triplets-component/Triplets";
import Zx9Speaker from '../../Components/Home-Page-Components/ZX9-Speaker-component/zx9-speaker';
import Zx7Speaker from '../../Components/Home-Page-Components/ZX7-Speaker-component/ZX7-Speaker';
import Yx1Earphone from '../../Components/Home-Page-Components/YX1-earphone/Yx1-earphone';

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
            <Hero />
            <Triplets />
            <Zx9Speaker />
            <Zx7Speaker />
            <Yx1Earphone />
        </div>
    )
}

export default Home;