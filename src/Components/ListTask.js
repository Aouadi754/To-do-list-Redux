import React from 'react'
import Task from './Task'
import {useSelector} from 'react-redux'

function ListTask() {
    let tasks=useSelector(state => state)
    return (
        <div>
    {tasks.map((task) =>{return <Task key={task.id} task={task}/>})};  
            
        </div>
    )
}

export default ListTask
