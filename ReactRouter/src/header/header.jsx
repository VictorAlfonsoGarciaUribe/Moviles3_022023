import React from "react";
import imgHeader from "./../assets/hotel.jpg";
import BuscarRoom from "../formularios/formularios";

function Header(){
   return (
    <header className="w3-display-container w3-content" style={{"max-width":"1500px"}}>
        <img className="w3-image" src={imgHeader} alt="The Hotel" style={{"min-width":"1000px"}} width="1500" height="800"/>
        <div className="w3-display-left w3-padding w3-col l6 m8">
            <div className="w3-container w3-red">
            <h2><i className="fa fa-bed w3-margin-right"></i>Hotel Name</h2>
            </div>
            <div className="w3-container w3-white w3-padding-16">
                <BuscarRoom/>
            </div>
        </div>
    </header>
   )
}
export default Header;