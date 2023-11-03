
import './App.css';
import React, { useRef } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
function App() {

  const tech = useRef(null);
  const contact = useRef(null); 


  const homeHandle=()=>{
    window.scrollTo({ top:0, left:0, behavior:'smooth'});
  }

  const techHandle=()=>{
    tech.current?.scrollIntoView({behavior:'smooth'});
  }

  const contactHandle = ()=>{

    contact.current?.scrollIntoView({behavior:'smooth'});
    
    }


  return (
    <>

    <Router>

      <Navbar homeHandle={homeHandle} 
      contactHandle={contactHandle} techHandle={techHandle}/>
      <Home />
      <Intro/>
      <Tech tech={tech} />
      <Contact contact={contact} />
      <Footer homeHandle={homeHandle} 
      contactHandle={contactHandle} techHandle={techHandle}/>
      </Router>
    </>
  );
}

export default App;
