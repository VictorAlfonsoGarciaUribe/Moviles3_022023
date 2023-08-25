import React from "react";

const Contenedor = ({ nombre, presen, precio, uimg }) => {
  //console.log(props);
  return (
    <div className="tarjeta_pro">
      <h1> {nombre} </h1>
      <p>{presen}</p>
      <img src={uimg} width="50%"/>
      <div className="Precios">
        <span>Precio: {precio}</span>
        <span className="BotonComprar">Quiero este</span>
      </div>
    </div>
  );
};

export default Contenedor;
