import React,{useState} from 'react'
import{InputGroup,FormControl,Button} from 'react-bootstrap'
import {add} from '../Redux/Actions/actions'
import { useDispatch } from "react-redux";

function AddTask() {
    const dispatch = useDispatch();
    const [add_input,SetAddInput]=useState('')
    return (
        <div style={{width:'35%',margin:'auto',marginTop:'85px'}}>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Add a new task.."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      style={{borderColor:'blue'}}
      value={add_input}
      onChange={(e)=>SetAddInput(e.target.value)}
    />
    <InputGroup.Append>
      <Button variant="danger" onClick={()=>{add_input===''? alert("Please add a task"):dispatch(add(add_input));SetAddInput('')}}>Add</Button>
    </InputGroup.Append>
  </InputGroup>
            
        </div>
    )
}

export default AddTask
