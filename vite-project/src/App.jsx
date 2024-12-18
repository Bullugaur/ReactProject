import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(1);
 
  const addValue = () => {
    if (counter == 20) {
      counter=20
    } else {
       setCounter(counter + 1);
    }
   
    console.log("value clicked",counter);
  }

  let removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br/> <br></br>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
