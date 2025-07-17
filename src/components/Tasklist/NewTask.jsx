import React from 'react'

const NewTask = ({data}) => {
  return (
     <div className='flex-shrink-0 h-full  w-[300px] rounded-xl bg-gray-600 p-5 '>
                <div className='flex justify-between items-center text-sm '>
                    <h3 className='bg-red-400 px-3 rounded'>{data.category}</h3>
                    <h4>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-lg font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-2'>{data.taskDescription}</p>
                <div className='mt-3'>
                    <button className=' bg-yellow-300'>Accept task </button>
                </div>
            </div>
  )
}

export default NewTask