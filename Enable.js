import { useState } from "react"
import React from 'react'

function Enable() {
const [text,setText] = useState("Enable Dark Mode")
const [mystyle, setenable] = useState({ 
  color : 'black',
  backgroundColor : 'white'
  
  });
const ModeOn=()=>{
  if(mystyle.color==='white'){
    setenable({color : 'black',
    backgroundColor:'white'})
    setText("Enable Dark Mode")

  }else{
    setenable({color : 'white',
    backgroundColor :'black'}
    )
    setText("Disable Dark Mode")
  }

}
  return (
    <>
    <div className="container my-4" >
   <>
  <select  style = {mystyle}
    className="form-select form-select-lg mb-3"
    aria-label=".form-select-lg example"
  >
    <option   selected="">Open this select menu</option>
    <option value={1}>One</option>
    <option value={2}>Two</option>
    <option value={3}>Three</option>
  </select>
  <select  style = {mystyle}
    className="form-select form-select-sm"
    aria-label=".form-select-sm example"
  >
    <option selected="">Open this select menu</option>
    <option value={1}>One</option>
    <option value={2}>Two</option>
    <option value={3}>Three</option>
  </select>
</>

  </div>

  <div className="containe ">
<button className="btn btn-primary" onClick = {ModeOn}>{text}</button>

  </div>
  </>
  )
}

export default Enable