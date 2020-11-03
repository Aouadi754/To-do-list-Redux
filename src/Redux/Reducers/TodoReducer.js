import {ADD,REMOVE,EDIT,FILTER} from '../Constants/constants'
import {tasksData} from '../States/states'


const TodoReducer=(state=tasksData,action)=> {
switch (action.type){
case ADD:
   return {...state,tasks:[...state.tasks,{id:Math.random(), title:action.payload,isDone:'Not yet'}]}
case REMOVE:
    return {...state,tasks:state.tasks.filter(el=>el.id!==action.payload)}
case EDIT:
    return {...state,tasks:state.tasks.map(el=>el.id===action.payload.id?{...el,title:action.payload.title,isDone:action.payload.isDone}:el)} 
case FILTER:
    return {...state,filter_variable:action.payload}
default:
    return state
    }  
}

export default TodoReducer
