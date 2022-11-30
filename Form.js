import { useState } from "react"
import React from 'react'

import { Link } from "react-router-dom"
 function Form(props) {
  const handleUpClick = () => {
    console.log('')
    let newText = text.toUpperCase()
    setText(newText)
    props.setAlert("success","Text Converted to Uppercase");
  }
  const handleCopyText = () => {
    // var copyText = document.getElementById("exampleFormControlTextarea1")
    // copyText.select();
    navigator.clipboard.writeText(text);
// document.getSelection().removeAllRanges();
    props.setAlert("success","Text Copied To Clipboard !");
  }

  const handleLOClick = () => {
    console.log('')
    let newText = text.toLowerCase()
    setText(newText)
    props.setAlert("success","Text Converted to lowercase");
  }

  const handleClearClick = () => {
    console.log('')
    let newText = ''
    setText(newText)
    props.setAlert("warning","Text Cleared");
  }
  const handle = (event) => {
    console.log('text area ')
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{ backgroundColor: props.mode === 'light' ? '#d9d9d9' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">

          <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? '#d9d9d9' : 'black', color: props.mode === 'light' ? 'black' : 'white', border: '2px solid red' }} placeHolder='Enter Text Here' onChange={handle} value={text} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert Into Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLOClick}>Convert Into Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
      </div>
      <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h1 >Text Summary</h1>
        <h4 > Total words : {text.split(/\s+/).filter((num)=>{ return num.length !==0 }).length}   and Total Character : {text.length}  </h4>

      </div>
      <Link to = "/about"> go To About</Link>

    </>

  )
}

export default Form;