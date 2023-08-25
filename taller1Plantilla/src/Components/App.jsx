import React from "react";
import Cabecera from "./Cabecera";
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
    return (
      <div>
        <Cabecera/>
        <Navbar />
        <div className="container mt-5">
          <div className="row">
            <AboutMe />
            <MainContent />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default App;