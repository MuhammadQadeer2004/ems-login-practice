import React from 'react'
import { useState } from 'react'

const login = ({handleLogin}) => {
  

    const [Email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(Email,password)
        setEmail('')
        setpassword('')
        
    }
  return (
    <div>
      <div className='flex h-screen w-screen justify-center items-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col justify-center items-center'>
            <input 
            value={Email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required 
            className='outline-none bg-transparent border-2 border-emerald-600 texl-xl rounded-full py-4 px-9 placeholder:text-gray-600' type="email" placeholder='Enter your email' />
            <input
             value={password}
            onChange={(e)=>{
                setpassword(e.target.value)
            }}
             required 
             className='outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-600 mt-8' type="password" placeholder='Enter your password' />
            <button className='text-white border-none outline-none  border-2 bg-emerald-600 rounded-full text-lg w-full font-semibold hover:bg-emerald-600 py-3 px-5 placeholder:text-gray-600 mt-3' >Log in</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default login
