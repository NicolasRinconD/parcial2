import React from 'react';
import './App.css';
import Movies from './components/Movies';
import Bars from './components/Bars';
import {useIntl} from 'react-intl';
function App() {
  const locale = useIntl();

  return (
    <div id="parent">
    <div className="App">
      <Movies int={locale}/>
    </div>
      <Bars />
    </div>
    
  );
}

export default App;
