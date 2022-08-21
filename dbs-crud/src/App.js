
import './App.css';
import {Home} from './Pages/Home.js';
import {About} from './Pages/About.js';
import {CustomerPage} from './Pages/CustomerPage';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import {Navbar} from './Navbar.js';
import { useEffect } from 'react';
import axios  from 'axios';
import { CustList } from './Components/CustList';
import {CustForm} from './Components/CustForm';
import React,{useState} from 'react';
import { CustDetails } from './Components/CustDetails';
function App() {
   useEffect(()=>{
     axios.get("http://localhost:8080/greet")
     .then(res=>console.log(res))
    
   })
  return (
    <div className="App">
    <Navbar/><br></br>
     <h3>DBS React</h3>

      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/CustomerPage" element={<CustomerPage/>}/>
       <Route path="/About" element={<About/>}/>
       <Route path="/Form" element={<CustForm/>}/>
       <Route path="/Customer" element={<CustList/>}/>
       <Route path="/Customer/:id" element={ <CustDetails/>}/>

     </Routes> 
    </div>
  );
}

export default App;
