import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
      <div>
        Blog App with Appwrite
       </div>
    </>
  )
}

export default App
