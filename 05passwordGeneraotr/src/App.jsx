import React, { useCallback, useEffect, useRef, useState } from 'react'
import './index.css'

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterallowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstubwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*(){}"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }
    console.log(pass)
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClioBoard = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, 15)
    window.navigator.clipboard.writeText(password)

  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 border-2 border-purple-300 rounded-2xl shadow-2xl bg-gradient-to-r from-indigo-100 to-purple-100 space-y-6">
        
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="🔐 Your Password"
            ref={passRef}
            className="flex-grow px-4 py-2 border border-indigo-400 rounded-md text-purple-800 bg-white shadow-inner"
          />
          <button
            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-md hover:from-red-500 hover:to-pink-500 transition shadow-md"
            onClick={copyPasswordToClioBoard}
          >
            Copy
          </button>
        </div>
  
        
        <div className="space-y-5">
          
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-purple-700">
              Length: {length}
            </label>
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="accent-purple-600"
            />
          </div>
  
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((c) => !c)}
              className="accent-pink-500"
            />
            <label htmlFor="numberInput" className="text-pink-700 font-medium">
              Include Numbers
            </label>
          </div>
  
        
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="characterInput"
              checked={characterAllowed}
              onChange={() => setCharacterallowed((c) => !c)}
              className="accent-blue-500"
            />
            <label htmlFor="characterInput" className="text-blue-700 font-medium">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
  

}

export default App


// <div>
//       <input type='text' >password</input>
//       <button>Copy</button>
//     </div>
//     <div>
//       <input type='range' min='6' max='15'>password length {length} </input>
//       <input type='checkbox'>Number</input>
//       <input type='checkbox'>Charachter</input>
//     </div>