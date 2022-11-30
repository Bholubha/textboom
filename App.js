//import logo from './logo.svg';

//import { Component } from 'react';
import './App.css';
 import Alert from './component/Alert';
import Navbar from './component/Navbar'
import Form from './component/Form'
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import React from 'react'

import { Routes, Route } from "react-router-dom"
 import About from './component/About';


function App() {
  //for matching background color with text area at strting;
  const[backMode,setbackMode] = useState('#d9d9d9');
  document.body.style.backgroundColor = backMode;

  const[mode,setMode] = useState("light");

  const toggleMode =()=>{
   if(mode==="light"){
  setMode("dark");
  setbackMode('black');
  setAlert("success","Dark Mode Is Enabled")
    }else{
  setMode("light");
  setbackMode('#d9d9d9');
  setAlert("success","Dark Mode is disabled")
  }
} 

const [alert,setalert] = useState(null);

const setAlert =(type,msg) => {
 

setalert({
 type : type,
 msg : msg 
})
 setTimeout(() => {
  setalert(null);
}, 1500);

}

return(

<>
<Navbar mode ={mode} toggleMode = {toggleMode} /> 
<Alert alert = {alert}/>
{/* <Navbar mode ={mode} toggleMode = {toggleMode} /> 
;
 <Form mode = {mode} heading = "Enter Text To Analyze" setAlert = {setAlert}/> */}
<BrowserRouter>
      <Routes>
        {/* <Route path="/first-react" element={<Navbar mode ={mode} toggleMode = {toggleMode} />  }/>
        <Route path = "/first-react" element = { <Alert alert = {alert}/> }/> */}
         <Route path = "/" element = { <Form mode = {mode} heading = "Enter Text To Analyze" setAlert = {setAlert}/>}/>
        <Route path="/about" element={ <About/> } />
  
      </Routes>

  </BrowserRouter>
  </>
  );

  }

export default App
