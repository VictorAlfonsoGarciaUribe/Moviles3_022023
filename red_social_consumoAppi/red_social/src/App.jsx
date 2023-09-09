import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import NavbarSmall from './components/navbarSmall/NavbarSmall'
import PageContainer from './components/pageContainer/PageContainer'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar/>
      <NavbarSmall/>
      <PageContainer/>
      <Footer/>
    </div>
    </>
  )
}

export default App
