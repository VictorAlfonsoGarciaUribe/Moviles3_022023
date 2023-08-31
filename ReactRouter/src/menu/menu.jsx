import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className="w3-bar w3-white w3-large">
             <Link to="/" className="w3-bar-item w3-button w3-red w3-mobile"><i className="fa fa-bed w3-margin-right"></i>Home</Link>
             <Link to="/rooms" className="w3-bar-item w3-button w3-mobile">Rooms</Link>
             <Link to="/about" className="w3-bar-item w3-button w3-mobile">About us</Link>
             <Link to="/plans" className="w3-bar-item w3-button w3-mobile">Tourist plans</Link>
             <a href="#contact" className="w3-bar-item w3-button w3-right w3-light-grey w3-mobile">Book Now</a>
        </div>
    )
}
export default Menu;