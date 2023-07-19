import React from 'react'
import Timer from './Timer'


export default function AlarmLook(prop) {
  let hour = prop.timeLeft[0];
  let min = prop.timeLeft[1];

  let handleDelete = (e) => {
    let id = e.target.parentNode.id;
    console.log(e.target.parentNode.id)
    prop.handleDeleteFunction(id)
  }
  return (
    <div key={prop.id} id={prop.id} style={{ padding: "8px", border: "1px solid grey", margin: "5px", display: "flex", justifyContent: "space-around" }}>
      <div>{prop.name}  {prop.id + 1}</div>
      <div>
        <Timer hour={hour} min={min} />
      </div>
      <div>{prop.time}</div>
      <button onClick={handleDelete} style={{ background: "red", color: 'white' }}>Delete</button>
    </div>
  )
}
