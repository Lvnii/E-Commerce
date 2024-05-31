import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Headphones from "../Pages/Headphones/Headphones";
import Speakers from "../Pages/Speakers/Speakers";
import Earphones from "../Pages/Earphones/Earphones";

const MyRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/headphones" element={<Headphones />}/>
            <Route path="/speakers" element={<Speakers />}/>
            <Route path="/earphones" element={<Earphones />}/>
        </Routes>
    )
}

export default MyRouter;