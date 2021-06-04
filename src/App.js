import React, { useState } from 'react';
import './App.css';

const App = () => {

  const purple = '#8e44ad';
  const [bg, setBg] = useState(purple);

  const [name,setName] = useState('Click Me')

  const bgchnge = () => {
    let newBg = '#34495e';
    setBg(newBg);
    setName('Ouuchh !! 🐺')
  };

  const bgBack = () => {
    setBg('purple');
    setName('omg 😠');
  };

  

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onMouseEnter={bgchnge} onMouseLeave={bgBack}> {name} </button>
      </div>
    </>
  );
}

export default App;
