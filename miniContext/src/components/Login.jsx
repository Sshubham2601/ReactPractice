import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/UserContext';

function Login() {
          const[userName,setUserName]=useState();
          const[password,setPassword]=useState();

          const {setUser}=useContext(UserContext)

          const handleSubmit=(e)=>{
                    e.preventDefault();
                    setUser({userName,password});

          }
  return (
    <div className='bg-slate-700 '>
      <h1 className='flex max-w-md mx-auto justify-center items-center'>Login</h1>
      <div className='flex max-w- 3xl mx-auto gap-x-2 justify-center items-center text-center'>
      <input type="text" placeholder='userName'  value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
      <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button className='bg-slate-400 border px-3 py-1 rounded' onClick={handleSubmit}>click</button>
      </div>
      </div>

  
  )
}

export default Login
