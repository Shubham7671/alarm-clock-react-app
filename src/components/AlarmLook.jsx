import React from 'react'

export default function AlarmLook(prop) {
  return (
   <div key={prop.id} style={{padding:"8px", border:"1px solid black",margin:"5px" ,display:"flex" ,justifyContent:"space-around"}}>
    <div>{prop.name}</div>
    <div>{prop.timeLeft}</div>
    <div>{prop.time}</div>
   </div>
  )
}
