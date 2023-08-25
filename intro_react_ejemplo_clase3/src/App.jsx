import "./App.css";
import Contenedor from "./Contenedor";

function App() {
  let productos = [
    {
      id: 1,
      nombre: "Coca-cola",
      presentacion: "1Lt",
      precio: 5000,
      urlImg:
        "https://static.merqueo.com/images/products/large/6206481c-0642-449e-894b-acfda98045a4.png",
    },
    {
      id: 2,
      nombre: "Doritos",
      presentacion: "100 gr",
      precio: 2000,
      urlImg:
        "https://mercasur.com.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNEVTQ1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--116d443af699782c034c0a31476a3e9756dc189a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDSUFOcEFpQUQiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--70dc4abb6ac52505d9b5c972f6eb61cd265c8cf9/doritos-mega-queso-185-gr.jpg?locale=es",
    },
    {
      id: 3,
      nombre: "Chitos",
      presentacion: "100 gr",
      precio: 1600,
      urlImg:
        "https://mistiendas.com.co/2348-large_default/chitos-cheetos-trissitos-x50g.jpg",
    },
    {
      id: 4,
      nombre: "Manzana",
      presentacion: "100 gr",
      precio: 2000,
      urlImg:
        "https://www.semana.com/resizer/aFlCrqRB5tcLkt-aB8oGfRK9VZQ=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/UM4AUXGP25H6NM6CS7UENR32DQ.jpg",
    },
    {
      id: 5,
      nombre: "Chocolate",
      presentacion: "1 barra",
      precio: 2500,
      urlImg:
        "data:image/jpeg;base64,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",
    },
  ];

  return (
    <>
      <h1> Nuestros Productos </h1>
      <div className="contenedor_productos">
        {productos.map((pro, index) => (
         // console.log(pro);
          <Contenedor
            key={index}
            nombre={pro.nombre}
            presen={pro.presentacion}
            precio={pro.precio}
            uimg={pro.urlImg}
          />
        ))  }
      </div>
    </>
  );
}

//componente funcion normal
export function Nombres() {
  return (
    <p>
      Mi componente
      <span> 01 </span>
    </p>
  );
}

export default App;
