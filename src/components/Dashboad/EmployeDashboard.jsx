import React from 'react'
import Headers from '../others/Headers'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeDashboard = (props) => {
  
  return (
    <div className='p-16 bg-[#1C1C1C] h-screen'> 
   
        <Headers changeuser={props.changeuser} data={props.data} />
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
};

export default EmployeDashboard
