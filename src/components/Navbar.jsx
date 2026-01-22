import logo from "../assets/LeaseDash-logo.png"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
        <Link to="/">
            <button className="logo-button">
                <img src={logo} alt="Logo" className="logo" />
            </button>
        </Link>
        </div>
    )
}

export default Navbar
