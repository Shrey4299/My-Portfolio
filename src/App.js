import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Testimony from './components/Testimony';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <div className=' transition-all ease-in-out delay-300 w-full m-0 p-0 border-0 outline-0 box-border decoration-none list-none font-poppins  text-white leading-7'>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    {/* <Footer/> */}
  
    
   

    



    </div>
  );
}

export default App;
