import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[60%] overflow-x-auto flex-nowrap flex gap-5 items-center justify-start py-6 w-full mt-10'>
            {data.tasks.map((elem, idx)=>{

                if(elem.active){
                   return <AcceptTask key={idx} data={elem} />
                }
            
                if(elem.Complete){
                  return  <CompleteTask key={idx} data={elem} />
                }
                if(elem.NewTask){
                  return  <NewTask key={idx} data={elem} />
                }

                 if(elem.failed){
                  return  <FailedTask key={idx} data={elem} />
                }

            })}

        </div>
    )
}

export default TaskList
