
import React, { Component } from 'react'

class Hello extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      isLoggedin : true
   }
 }
  render() {
//    if(this.state.isLoggedin){
//     return <h1>Hello Bhautik</h1>
//    }else{
//     return <h1>Hello Guest</h1>
//    }

//   let messege
//   if(this.state.isLoggedin){
//     messege = <h1>hello Bhautik</h1>
//   }else{
//     messege = <h1>hello Guest</h1>
//   }
// return <div>{messege}</div>

return this.state.isLoggedin && <h1>Helllo Bhautik</h1>

  }
}

export default Hello