import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header"
import MyRouter from "../Router/MyRouter"
import './Layout.css'

const Layout = () => {
    return (
        <div className="layout-container">
            <div className="header-container">
                <Header />
            </div>
            <div className="main-container">
                <MyRouter />
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default Layout;