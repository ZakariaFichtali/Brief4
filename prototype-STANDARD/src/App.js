import {Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home'; 
import Addtodos from './components/todoviews/Addtodos';
import Edittodos from './components/todoviews/Edittodos';
import Indextodos from './components/todoviews/Indextodos';
import {BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      

    <nav className="nav">
        <ul className="ul">
            <li className="li">
              <Link to="/" >Home</Link>  </li>
            <li  className="li"> 
              <Link to="/Indextodos" >Index Todos</Link> </li>
            <li  className="li">
            <Link to="/Addtodos" >Add Todos</Link>  </li>
        
            {/* <li  className="li">
            <Link to="/Edittodos/:id" >Edittodos</Link> 
            </li> */}
        
        </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Addtodos' element={<Addtodos/>}/>
      <Route path='/Indextodos' element={<Indextodos/>}/>
      <Route path='/Edittodos/:id' element={<Edittodos/>}/>
     </Routes>

     <h1>Go To Indextodos</h1>  
    </div>
    
    

  );
}

export default App;
