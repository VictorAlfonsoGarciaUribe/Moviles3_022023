import React from "react";

function BuscarRoom(){
   return (
    <form>
        <div className="w3-row-padding" style={{"margin":"0 -16px"}}>
            <div className="w3-half w3-margin-bottom">
                <label><i className="fa fa-calendar-o"></i> Check In</label>
                <input className="w3-input w3-border" type="text" placeholder="DD MM YYYY" name="CheckIn" required/>
            </div>
            <div className="w3-half">
                <label><i className="fa fa-calendar-o"></i> Check Out</label>
                <input className="w3-input w3-border" type="text" placeholder="DD MM YYYY" name="CheckOut" required/>
            </div>
        </div>
        <div className="w3-row-padding" style={{"margin":"8px -16px"}}>
            <div className="w3-half w3-margin-bottom">
                <label><i className="fa fa-male"></i> Adults</label>
                <input className="w3-input w3-border" type="number" value="1" name="Adults" min="1" max="6"/>
            </div>
            <div className="w3-half">
                <label><i className="fa fa-child"></i> Kids</label>
            <input className="w3-input w3-border" type="number" value="0" name="Kids" min="0" max="6"/>
            </div>
        </div>
        <button className="w3-button w3-dark-grey" type="submit"><i className="fa fa-search w3-margin-right"></i> Search availability</button>
    </form>
   )
}
export function Suscripcion() {
    return (
        <div className="w3-container w3-padding-32 w3-black w3-opacity w3-card w3-hover-opacity-off" style={{"margin":"32px 0"}}>
            <h2>Get the best offers first!</h2>
            <p>Join our newsletter.</p>
            <label>E-mail</label>
            <input className="w3-input w3-border" type="text" placeholder="Your Email address"/>
            <button type="button" className="w3-button w3-red w3-margin-top">Subscribe</button>
        </div>
    )
}
export function Contacto() {
    return (
        <div className="w3-container" id="contact">
            <h2>Contact</h2>
            <p>If you have any questions, do not hesitate to ask them.</p>
            <i className="fa fa-map-marker w3-text-red" style={{"width":"30px"}}></i> Chicago, US<br/>
            <i className="fa fa-phone w3-text-red" style={{"width":"30px"}}></i> Phone: +00 151515<br/>
            <i className="fa fa-envelope w3-text-red" style={{"width":"30px"}}> </i> Email: mail@mail.com<br/>
            <form>
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"/></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email"/></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message"/></p>
                <p><button className="w3-button w3-black w3-padding-large" type="submit">SEND MESSAGE</button></p>
            </form>
        </div>
    )
}

export default BuscarRoom;