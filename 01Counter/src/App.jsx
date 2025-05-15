// Assignment 1 : Add limit of increament till 22 and decrement below 0 */ 
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(2)

  const increment = () =>{
    if(count<22)
    {
      setCount(c=>c+1)
    }
    else
    {
      alert("Not allowed to increase beyond 22")
    }
  }

  const decrement = () =>{
    if(count>0)
      {
        setCount(c=>c-1)
      }
      else
      {
        alert("Not allowed to decrease beyond 0")
      }
  }

  return (
    <>
    <h1>Chai Aur React</h1>
    <p> Counter Value : {count} </p>
    <button onClick={increment}>Increment Value : {count}</button>
    <br />
    <button onClick={decrement}>Decrement Value : {count}</button>
    </>
  )
}

export default App
