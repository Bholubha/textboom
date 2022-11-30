 import React from 'react'
//import Enable from './Enable'
// import Form from './Form'
import { useState } from 'react'
import { Link } from 'react-router-dom';
//import Form from './Form'
function Harrytext(props) {

  const [text,setText] = useState("Enable Dark Mode")
const [mystyle, setenable] = useState({ 
  color : 'black',
  backgroundColor : 'white'
  
  });
const ModeOn=()=>{
  {props.toggleMode()}
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
<nav className={`navbar navbar-expand-lg bg-${props.mode} text-light`} >
  <div className="container-fluid text - "  >
    <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`}  href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
      <a href ="/" className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page"  >Home</a>
        </li>
        <li className="nav-item">
          {/* <Link to = "/about" className={`nav-link text-${props.mode==='light'?'dark':'light'}`} >Link</Link> */}
        </li>
        <li className="nav-item dropdown">
          <a className={`nav-link dropdown-toggle text-${props.mode==='light'?'dark':'light'}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" >
            <li><a className="dropdown-item"  href="/">Action</a></li>
            <li><a className="dropdown-item"   href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item"   href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className={`nav-link disabled text-${props.mode==='light'?'dark':'light'}`}>Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
        <button className={`btn btn-outline-success text-${props.mode==='light'?'dark':'light'}`}  type="submit">Search</button>
      </form>
   
<div className="form-check form-switch mx-3">
  <input className="form-check-input"  onClick={ModeOn}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}htmlFor="flexSwitchCheckDefault">{text}</label>
</div>
  </div>
  </div>
  
</nav>



 </>     
  )
}

export default Harrytext