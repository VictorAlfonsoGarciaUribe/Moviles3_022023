import React from "react";
import BuscarRoom, {Contacto, Suscripcion} from "../formularios/formularios";
import Tarjeta from "../tarjetas/tarjetas";
import { ResumenAbout } from "../paginas/about";
import { ResumenHoteles } from "../paginas/otrosHoteles";

function Cuerpo(){
   return (
    <div className="w3-content" style={{"max-width":"1532px"}}>
        <div className="w3-container w3-margin-top" id="rooms">
            <h3>Rooms</h3>
            <p>Make yourself at home is our slogan. We offer the best beds in the industry. Sleep well and rest well.</p>
        </div>
        <BuscarRoom/>
        <div className="w3-row-padding w3-padding-16">
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
        </div>
        <ResumenAbout/>
        <ResumenHoteles/>
        <Suscripcion/>
        <Contacto/>
    </div>
   )
}
export default Cuerpo;