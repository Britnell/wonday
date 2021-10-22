import React from 'react';

import './App.css'

import TBCT from './tbct'
import Portfolio from './portfolio';


function Intro(){

  return (
    <div className="intro">
      <p>
        Hi I'm Tommy. I started in Electronic Engineering, discovered the 
        'Creative Technologist' & UI/UX and ended up as a Front end developer.
        I love creating. I love creating interactions, experiences and interfaces. 
        That go down smooth. That help you do whatever you were originally trying to do.
        That maybe surprise and delight. Just a little. Digital and sometimes physical. 
      </p>
    </div>
  )
}


function App() {
  return (
    <div className="App">
    
      <TBCT />

      <main>
          <Intro />

          <Portfolio />

      </main>

      <footer>
        {/* . */}
      </footer>
    </div>
  );
}

export default App;
