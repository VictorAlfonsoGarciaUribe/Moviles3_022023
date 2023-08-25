import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contenedor from './OtroComponente'


function App() {
  const [count, setCount] = useState(0)

  //Para insertar con JSX lo mejor es insertar el fractment <>  </>
  return ( 
    <>
     <Contenedor/>
    
    </>
  )
}

function Nombres (){
  return ( 
    <>
     <h1>Contenido HTML y JS</h1>
    </>
  )
}

export default App
