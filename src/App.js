import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import React, {useState, useEffect} from 'react';


function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
      if (theme === 'light') {
      setTheme('dark');
      } else {
      setTheme('light');
      }
};


  return (
    <div  className={`App ${theme}`}>
      <div className="App ">
        <Header/>
        <button onClick={toggleTheme}>Toggle Theme</button>
          <h1>Hola Mundo</h1>
        <Characters/>
      </div>
    </div>

  );
}

export default App;
