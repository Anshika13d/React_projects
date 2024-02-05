//Hooks
//Hooks are used to change the UI(state) and it is used by importing {useState}
//Hooks are used when the value is changing at multiple places
//you get 2 things from useState so it always returns an array - one variable and one fucntion


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  
  let [counter, setCounter] = useState(5);


//  let count = 5;


  const counting = () =>{
      if(counter > 19){
        alert("Can not exceed 20")
      }else{
        setCounter(counter + 1)
      }
      // setCounter(prevCounter  => prevCounter + 1);
      // setCounter(prevCounter  => prevCounter + 1);
      // setCounter(prevCounter  => prevCounter + 1);

  }
 

  const decCount = () =>{
      if(counter < 1){
        alert("Stop You cant go below")
      }else{
        setCounter(counter - 1)
      }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counting {counter} </h2>
      <button onClick={counting}>Increase count</button>
      <button onClick={decCount}>Decrease count</button>

      <h3>counter {counter}</h3>
      <h4>counterrr {counter}</h4>
    </>
  )
}

export default App
