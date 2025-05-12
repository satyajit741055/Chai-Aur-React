import { useState } from 'react'
import './index.css'


function App() {
  const [color, setColor] = useState("black")

  const colorMap = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    violet: "bg-violet-600",
    gray: "bg-gray-600",
    orange: "bg-orange-500",
    indigo: "bg-indigo-500",
    black: "bg-black"
  };
  
  const bgColorClass = colorMap[color] || "bg-blue-500";
  
  const changeColorClick = (e)=>{
    setColor((e.target.textContent.toLowerCase()))
    console.log((e.target.textContent.toLowerCase()))
  }
  
  return (
    <>
      <div className={`${bgColorClass} w-screen h-screen`}>
        <div className="fixed bottom-0 w-full bg-blue-500 p-4 text-white flex justify-center ">
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded" onClick={changeColorClick}>Red</button>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded" onClick={changeColorClick}>Green</button>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={changeColorClick}>Blue</button>
          <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded" onClick={changeColorClick}>Yellow</button>
          <button className="bg-violet-600 text-white font-bold py-2 px-4 rounded" onClick={changeColorClick}>Violet</button>
          <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={changeColorClick}>Gray</button>
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded" onClick={changeColorClick}>Orange</button>
          <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded" onClick={changeColorClick}>Indigo</button>
        </div>

      </div>
    </>
  )
}

export default App
