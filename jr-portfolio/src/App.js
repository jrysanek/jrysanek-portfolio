import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Biography from './Components/Biography/Biography';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="home">

      <Header/>

      <Biography/>

      <Projects/>

      <Contact/>
      


    </div>
  );
}

export default App;
