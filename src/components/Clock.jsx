import React from 'react'
import { useState,useEffect } from 'react'

export default function Clock() {
    let [time, setTime] = useState("00:00:00");

    useEffect(() => {
        let intervalId = setInterval(() => {
            let date=new Date().toLocaleTimeString();
          setTime(date)
        }, 1000);
    
        let cleanInterval = () => {
          clearInterval(intervalId);
        }
        return cleanInterval;
      }, [])

  return (
    <div><span style={{ padding:"5px",border:"2px solid grey"}}>Clock : {time}</span></div>
  )
}
