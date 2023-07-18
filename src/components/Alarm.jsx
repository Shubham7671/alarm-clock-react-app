import React, { useEffect } from 'react'
import { useState} from 'react'
import AlarmLook from './AlarmLook';


export default function Alarm() {
  const [inputData, setInputData] = useState("00:00");
  const [alarmList,setAlarmList]=useState([]);
  let [alarmTimerList,setAlarmTimerList]=useState([]);
  
  const addAAlarm=()=>{
  
  let newList=[...alarmList,{
    name:"Alarm",
    time:inputData,
    timeLeft:calculateTimeDifference()
  }]
    setAlarmList(newList);
    let timerArray=[...alarmTimerList,inputData]
    setAlarmTimerList(timerArray)
  }


  const calculateTimeDifference = () => {
    const startTimeParts = inputData.split(':');

    const start = new Date();
    start.setHours(parseInt(startTimeParts[0]), parseInt(startTimeParts[1]), 0, 0);

    const end = new Date(); // Use the current date as the end time

    const diff = Math.abs(end - start);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor(diff / (1000 * 60 * 60));
   
    return (`${hours} hours and ${minutes} minutes`);
  };
    



  return (
    <div>
      <div style={{width:"70%",margin:"20px auto" ,border:"2px solid black",padding:"10px"}}>
      <label htmlFor="input-value" style={{fontSize:"20px"}}>Select Time</label>
      <input type="time" id='input-value' onChange={(e) => { setInputData(e.target.value) }} style={{width:"70%",padding:"10px" ,fontSize:"20px"}} />
     

      {alarmTimerList.includes()?<p>{inputData}</p>:null}

      <button onClick={addAAlarm} style={{background:"green",marginLeft:"10px" ,padding:"10px",fontSize:"20px" ,color:"white"}}>Add New Alarm</button>
      </div>
      <div style={{width:"70%",margin:"20px auto"}}>
      {alarmList.map((el,i)=>{
         return <AlarmLook key={i} {...el}/>
      })}
      </div>
      
    </div>
  )
}
