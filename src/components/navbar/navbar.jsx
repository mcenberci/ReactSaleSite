import React from "react";
import "./navbar.css";
import RSnavbar from "./rsnavbar"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand navbarLogo" href="/"><img className="navLogo" src={require("./images/logo.png")} alt="Logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbarSec" id="mynavbar">
                    {RSnavbar()}
                </div>
            </div>
        </nav>
    )

}
export default Navbar;