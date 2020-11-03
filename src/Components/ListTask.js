import React from 'react'
import Task from './Task'
import {useSelector} from 'react-redux'

function ListTask() {
let tasks=useSelector(state => state.tasks)
let filter_variable=useSelector(state => state.filter_variable)    
    return (
        <div>

{(filter_variable==='All'?tasks:tasks.filter(el=>el.isDone===filter_variable)).map((task) =><Task key={task.id} task={task}/>)}

   
      
           
        </div>
    )
}

export default ListTask
