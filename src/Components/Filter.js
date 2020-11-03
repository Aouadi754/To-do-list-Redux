import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {filter} from '../Redux/Actions/actions'
import './Components.css'

function Filter() {
   let dispatch=useDispatch()
   const [value,SetValue]=useState('All')
   dispatch(filter(value))
    return (
        
    <div className='filter'>
       <form>
           <label>
All
               <input type='radio' value='All' checked={value==='All'} onChange={(e)=>SetValue(e.target.value)} />
           </label>
           <label>
Done
               <input type='radio' value='Done' checked={value==='Done'}  onChange={(e)=>SetValue(e.target.value)}  />
           </label>
           <label>
Not yet
               <input type='radio' value='Not yet' checked={value==='Not yet'}   onChange={(e)=>SetValue(e.target.value)} />
           </label>
           </form> 
    </div>
            
        
    )
}

export default Filter
