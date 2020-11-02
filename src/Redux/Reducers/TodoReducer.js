import {ADD,REMOVE,EDIT} from '../Constants/constants'
import {tasksData} from '../States/states'


const TodoReducer=(state=tasksData,action)=> {
switch (action.type){
case ADD:
   return [...state,{id:Math.random(), title:action.payload,isDone:'Not yet'}]
case REMOVE:
    return state.filter(el=>el.id!==action.payload)
case EDIT:
    return state.map(el=>el.id===action.payload.id?{...el,title:action.payload.title,isDone:action.payload.isDone}:el)
default:
    return state
    }  
}

export default TodoReducer
