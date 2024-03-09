import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // ref hook
  const passwordRef = useRef()


  const passwordGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)
    }
    setPassword(password)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => { 
    passwordRef.current?.select();
   // passwordRef.current?.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(password) 
  }, [password])

  useEffect(() => { passwordGenerator() }, [length, numAllowed, charAllowed, setPassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className=' text-white text-center my-3'> Password Generator </h1>
        <div className='flex-shadow rounded-md overflow-hidden mb-4'>
        <div className="flex flex-col items-center">
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white my-3 px-3 py-0.5 shrink-0 rounded-md'
            style={{ transition: 'transform 0.1s', transform: 'scale(1)' }}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >Copy</button>
        </div>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
                min={8}
                max={20}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setLength(e.target.value)}
              />
              <label>Length:{length}</label>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              checked={numAllowed}
              onChange={() => { setnumAllowed((prev) => !prev); }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              checked={charAllowed}
              onChange={() => { setcharAllowed((prev) => !prev); }}
            />
            <label>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
