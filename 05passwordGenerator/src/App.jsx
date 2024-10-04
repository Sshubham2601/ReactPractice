import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');
 
  //use of useRef Hook
 const passwordRef=useRef(null)

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "123456789";
    if (characterAllowed) str += "!@#$%^&*()_~`";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword])
  
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
      generatePassword();
  },[length,numberAllowed,characterAllowed,generatePassword])

  return (
    < >
      <div className='w-full max-w-md mx-auto shadow-md px-3 py-2 my-8 text-orange-400 bg-gray-700 rounded-lg '>
        <h1 className='text-2xl text-center text-gray-50 my-3 pb-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none  w-full px-4 py-2 '
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-4 py-0.5  shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
             <input type="checkbox"
                 defaultChecked={characterAllowed}
                 id='characterInput'
                 onChange={(e) => {
                 setCharacterAllowed((prev) => !prev);
              }}
             />
            <label htmlFor="">Characters</label>

          </div>
        </div>
      </div>


    </>
  )
}

export default App
