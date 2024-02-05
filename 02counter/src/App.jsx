import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]= useState(15)

  //let counter=15

  const addValue=()=>{
   // counter= counter+1 
   if(counter<20)
    setCounter(counter++)
  }

  const decValue=()=>{
   // counter=counter-1
   if(counter>0)
    setCounter(counter--)
  }
  
  return (
    <>
      <h1>react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={decValue}> Decrease value </button>
    </>
  )
}

export default App
