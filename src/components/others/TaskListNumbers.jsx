import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between screen gap-5'>
      <div className='py-6 px-5 rounded-xl w-[40%] bg-red-400 '>
        <h2 className='text-2xl font-semibold'>{data.taskStats.newTask}</h2>
        <h3 className='font-medium text-xl'>New Task</h3>
      </div>
      <div className='py-6 px-5 rounded-xl w-[40%] bg-yellow-400 '>
        <h2 className='text-2xl font-semibold'>{data.taskStats.complete}</h2>
        <h3 className='font-medium text-xl'>Complete Task</h3>
      </div>
      <div className='py-6 px-5 rounded-xl w-[40%] bg-blue-400 '>
        <h2 className='text-2xl font-semibold'>{data.taskStats.active}</h2>
        <h3 className='font-medium text-xl'>Active Task</h3>
      </div>
      <div className='py-6 px-5 rounded-xl w-[40%] bg-green-400 '>
        <h2 className='text-2xl font-semibold'>{data.taskStats.failed}</h2>
        <h3 className='font-medium text-xl'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
