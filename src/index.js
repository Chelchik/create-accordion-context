import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContext from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));

function  Main() {
  const [theme, setTheme] = useState(false)
    return (
      <React.StrictMode>
        <ThemeContext.Provider value={{theme, setTheme}}> 
          <App />
        </ThemeContext.Provider>
      </React.StrictMode>

    )
  }

root.render(
  <Main />    
);
