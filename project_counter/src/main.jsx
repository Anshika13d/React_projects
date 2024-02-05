import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//createRoot creates a structure tree DOM like strucutre like browser creates DOM
//it comapres its own DOM and browser DOM and only changes the things which are changed in the UI
//unlike browser DOM reloads the whole page
//virtual DOM keeps tract of the DOM elements

//reconciliation - means the process/algorithm of comapring DOM and Virtual DOM and only updating the differences

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
