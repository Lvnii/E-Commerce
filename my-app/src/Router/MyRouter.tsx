import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Headphones from "../Pages/Headphones/Headphones";
import Speakers from "../Pages/Speakers/Speakers";
import Earphones from "../Pages/Earphones/Earphones";
import Cart from "../Pages/Cart/Cart";

const MyRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/headphones" element={<Headphones />}/>
            <Route path="/speakers" element={<Speakers />}/>
            <Route path="/earphones" element={<Earphones />}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
    )
}

export default MyRouter;