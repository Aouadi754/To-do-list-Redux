import React,{useState} from 'react'
import './Components.css'
import { useDispatch } from "react-redux";
import {remove,edit} from '../Redux/Actions/actions'
import{Modal,Button,FormControl,Form} from 'react-bootstrap'


function Task({task}) {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [Edit, setEdit] = useState(task.title);
    const [Status, setStatus] = useState(task.isDone);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    return (
        <div className='task' >

        <div className='task_bar'>
         <h5>Task</h5>   
         <h5 className='task_bar_status'>Status</h5>

         </div>

         <div className='description_bar'>

         <p className={task.isDone==='Done'?'description_task':''} style={{width:'280px',fontFamily:'cursive'}}>{task.title}</p>       
         <p className='description_status' >{task.isDone}</p>
         <img  src="/Edit-removebg-preview.png" alt='' onClick={()=>{handleShow();setStatus(task.isDone);setEdit(task.title)}}/>
        <img  src="/delete-icon-removebg-preview.png" alt=''  onClick={()=>dispatch(remove(task.id))}/>

        <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Edit your task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form.Label><h5>Task:</h5></Form.Label>
            <FormControl
      placeholder="you can edit your task.."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      style={{borderColor:'blue'}}
      value={Edit}
      onChange={(e)=>setEdit(e.target.value)}/>
      <div style={{display:"flex",alignItems:'center',marginTop:'30px'}}>
      <h5>Status:</h5> 
      <select className='select_style'  value={Status} onChange={(e)=>setStatus(e.target.value)}>
        <option>Not yet</option>
        <option>Done</option>
    </select>
    </div>
      </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={()=>{dispatch(edit({id:task.id,title:Edit,isDone:Status}));handleClose()}}>
            Edit
          </Button>
        </Modal.Footer>

      </Modal>
         </div>
        </div>
    )
}

export default Task
