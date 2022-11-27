

import "./NavBar.css"
import { CartWidget } from "../cartWidget/cartWidget";

const NavBar = ()=>{
    
    const nombre = "Home"

    return (
        <div className="navbar-container">
            <div className="container-logo">
                <img className="logo-navbar" src="https://res.cloudinary.com/dstoh3mkx/image/upload/v1669484657/pngwing.com_eanegk.png" alt="LogoH" />
            </div>
            <ul className="navbar">
                <li className="navbar-item">{nombre}</li>
                <li className="navbar-item">Deportivas</li>
                <li className="navbar-item">Urbanas</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;
