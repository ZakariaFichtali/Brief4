import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Indextodos() {
    
    const navigate = useNavigate();

    const [todos,setTodos] = useState([]);
    async function echoData(){
        const response = await axios.get('http://127.0.0.1:8000/api/brief/');
        console.log(response.data);
        setTodos(response.data);
    }
   useEffect(()=>{
    
    echoData();

   },[]);

// ---------------------------------------------------------------
const SetData = (Todo) => {
    
    console.log(Todo)
    const {id,todo} = Todo;
    localStorage.setItem('ID',id);
    localStorage.setItem('todo',todo);
   }


   const deletetodo = async (id) => {
    console.log(id)
    await axios.delete(`http://127.0.0.1:8000/api/brief/${id}`);
    echoData()
    navigate('/indextodos')

   }

// ---------------------------------------------------------------
// ---------------------------------------------------------------


  return (
    <div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
    <Link className='new' to='/Addtodos'>.</Link>
    <Link className='new' to='/Addtodos'>New Todos</Link>

    <div className='all'>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>
            </thead>

            <tbody>
                {todos.map(Todo=>(
                    <tr key={Todo.id}>
                        <td>{Todo.id} </td>
                        <td>{Todo.todo}</td>

                        <td><a href={`/Edittodos/${Todo.id}`}> <button  onClick={(e)=>{
                            SetData(Todo)}}
                            >Edit</button> </a>
                            
                         <button onClick={()=>deletetodo(Todo.id)} > Delete</button></td>


                    </tr>
                ))}
            </tbody>
        </table>
    </div>


    </div>
  )
}

export default Indextodos