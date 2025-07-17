import React from 'react'

const Headers = (props) => {

  const loggOutUser =()=>{
    localStorage.setItem('loggedInUser','')
    props.changeuser('')
    // window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-2xl font-semibold'>username</span></h1>
      <button onClick={loggOutUser} className='bg-red-500 text-white px-3 py-2 rounded font-medium text-lg'>Log Out</button>
    </div>
  )
}

export default Headers
