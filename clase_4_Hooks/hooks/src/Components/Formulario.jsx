import React from 'react'

const Formulario = () => {
  return (
    <>
<form onSubmit={ ev => {
ev.preventDefault();
let email = ev.target.email.value;
let contra =ev.target.contra.value;
login(email, contra)
}
}

>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
    <input name="email" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name="contra" type="password" className="form-control" id="exampleInputPassword1" />
  </div>
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


}

export default Formulario