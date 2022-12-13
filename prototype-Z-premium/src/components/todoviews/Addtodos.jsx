import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './style.css';
import { useNavigate } from "react-router-dom";





const Addtodos = () => {
  const [formvalue,setformvalue] = useState({ 
    todo:""

   })
   const navigate = useNavigate();
   const captureValue = (evt) =>{
    console.log(evt.target)
    const name = evt.target.name;
    const value = evt.target.value;
    setformvalue({...formvalue,[name]:value})
   }

   const AddTodos = async (e)=>{
    e.preventDefault();
    await axios.post('http://127.0.0.1:8000/api/brief/',formvalue).then((res)=>{
      
    navigate('/indextodos')
      
      console.log(res.data);
      });

    setformvalue ({
      todo :""
    })
    console.log('ok')
   }
   
  return (
    <div>
      
     <h1 >Add Todos</h1> 

      <form>
        <input className='inp' type="text" name='todo' value={formvalue.todo} onChange={captureValue} placeholder="Enter Your ToDos"/>
        <input  className='btn' type="submit" onClick={AddTodos}  />
      </form>
    </div>
  )
}

export default Addtodos