import { useState } from "react"
import React from 'react'

const Formulario_useState = () => {
    let [email, setEmail] = useState ("");
    let [contra, setContra] = useState ("");
    let validacion = validar(email,contra)
  return (
    <>
<form onSubmit={ ev => {
ev.preventDefault();
login(email, contra)
}
}

>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
    <input name="email" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
        value={email}
        onChange={ev =>setEmail(ev.target.value)}
    />
    <p>{email}</p>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name="contra" type="password" className="form-control" id="exampleInputPassword1" 
    value={contra}
    onChange={ev =>setContra(ev.target.value)}
    />
    <p>{contra}</p>
  </div>
  <p>{validacion}</p>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  );

    //Funcion validadora 
    function login(email, contrasena) {
        if(email === "pepito@g.com" &&
        contrasena === "1234"){
            alert("Usuario valido")
        } else{
            alert("Incorrecto")
        }
    }

    function validar (email,contrasena)  {
        if (!email.includes("pepito@gmail.com" )){
            return "Usuario incorrecto" 
        }if(!contrasena.includes("pepito123")){
            return "contraseña incorrecta"
        }
    }

}

export default Formulario_useState