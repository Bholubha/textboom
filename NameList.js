import React from 'react'
import Newlist from './Newlist'

function NameList() {
    const Names = [
      {
     id : 1,
     nam : 'Bhautik'

      },
      {
        id : 2,
        nam : 'raj'

      },
      {
        id : 3,
        nam : 'rajput'
      }



    ]

    const temp =  Names.map(name => <Newlist  key = {name.id} na = {name} /> )
  return (
    
    <div>
{temp}

    </div>
  )
}

export default NameList