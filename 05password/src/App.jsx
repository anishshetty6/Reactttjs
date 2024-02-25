import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 0; i < Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password = str.charAt(char)
    }
    setPassword(password)

  }, [length, numAllowed, charAllowed, setPassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='flex-shadow rounded-lg overflow-hidden mb-4'></div>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly />
      </div>
    </>
  )
}

export default App
