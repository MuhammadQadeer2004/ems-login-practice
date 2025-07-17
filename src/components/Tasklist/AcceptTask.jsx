import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full  w-[300px] rounded-xl bg-orange-900 p-5 '>
            <div className='flex justify-between items-center text-sm '>
                <h3 className='bg-red-400 px-3 rounded'>{data.category}</h3>
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-lg font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className="flex justify-between mt-4 gap-2">
                <button className="bg-green-500 hover:bg-green-600 py-1 px-3 text-sm rounded">
                    Mark as Complete
                </button>
                <button className="bg-red-500 hover:bg-red-600 py-1 px-3 text-sm rounded">
                    Mark as Failed
                </button>
            </div>

        </div>
    )
}

export default AcceptTask