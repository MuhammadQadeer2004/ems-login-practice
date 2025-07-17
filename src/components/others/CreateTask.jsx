import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)


    const [taskTitle, settaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [Category, setCategory] = useState('')

    const [Newtask, setNewtask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setNewtask({ taskTitle, taskDate, taskDescription, Category, active: false, NewTask: true, failed: false, completed: false })
        
        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(Newtask)
                elem.taskStats.Newtask = elem.taskStats.Newtask + 1
            }
        })
        setUserData(data)

       console.log(data)

        settaskTitle('')
        setAsignTo('')
        setCategory('')
        settaskDescription('')
        setNewtask('')

    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-wrap w-full justify-between items-start'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Tittle</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                settaskTitle(e.target.value)
                            }}
                            className='bg-transparent border-[2px] border-gray-500 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transpare mb-4' type="text" placeholder='task name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                settaskDate(e.target.value)
                            }}
                            className='bg-transparent border-[2px] border-gray-500 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transpare  mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign To</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='bg-transparent border-[2px] border-gray-500 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transpare  mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={Category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='bg-transparent border-[2px] border-gray-500 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transpare  mb-4' type="text" placeholder='design,dev,etc' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Discripiation</h3>
                    <textarea value={taskDescription}
                        onChange={(e) => {
                            settaskDescription(e.target.value)
                        }} className='w-full text-white h-44 text-sm py-2 px-4 rounded  bg-transparent border-[2px] border-gray-500 ' name="" id="" cols={30} rows={10}></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-300 px-5 rounded text-sm mt-4 w-full '>Creat task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
