import { useState } from 'react'
import Formulario from './Components/Formulario'
import Formulario_useState from './Components/Fomulario_useState'
import EuseEffect from './Components/euseEffect'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3>Hooks</h3>
    <h5>useState --- se usa para saber el estado actual de la variable</h5>
    <p>Forma normal: Cuando damos click obtiene la información</p>
    <p>Forma controlada: Mientras la persona esta escribiendo obtiene información </p>
    <h5>useEffect ---</h5>
    <p>Se utiliza para manejar efectos secundarios y lógica que ocurre después de la renderización</p>
    <p>Hace que cierto codigo se ejecute despues de que se haya rendereizado el componente</p>
    <h5>useContext ---</h5>
    <h5>useRef</h5>
    <div className='row justify-content-center'>
    <div className="col-6">
      <h3>Validación con funciones sin useState</h3>
    <Formulario/>  
      <br />
      <h3>Validación con useState</h3>
    <Formulario_useState/>
    <br />
    <h3>Mapeo con useEffect</h3>
    <EuseEffect/>
    </div>
    </div>
    </>
  )
}

export default App
