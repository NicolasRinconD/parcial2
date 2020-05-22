import React from 'react';
import './App.css';
import Movies from './components/Movies';
import Bars from './components/Bars';

function App() {
  return (
    <div id="parent">
    <div className="App">
      <Movies />
    </div>
      <Bars />
    </div>
    
  );
}

export default App;
