import React, { useEffect, useState, useRef } from 'react'

export default function StopWatch() {
    let [time, setTime] = useState(0)
    let intervalId = useRef(null);
    let [display, setDisplay] = useState("00:00:00:00")

    useEffect(() => {
        setDisplay(formatSeconds(time))
    }, [time])

    useEffect(() => {

        const cleanInterval = () => {
            clearInterval(intervalId.current);
        }
        return cleanInterval
    }, [])

    let startStopWatch = () => {
        if (intervalId.current != null) {
            return;
        }
        intervalId.current = setInterval(() => {
            setTime(prev => prev + 1)

        }, 1000);
    }
    let stopStopWatch = () => {
        clearInterval(intervalId.current);
        intervalId.current = null
    }
    let resetStopWatch = () => {
        setTime(0);
        clearInterval(intervalId.current);
        intervalId.current = null;
    }
    function formatSeconds(seconds) {
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
      
        let formattedSeconds = seconds % 60;
        let formattedMinutes = minutes % 60;
        let formattedHours = hours;
      
        // Pad single-digit values with leading zeros
        formattedSeconds = formattedSeconds.toString().padStart(2, '0');
        formattedMinutes = formattedMinutes.toString().padStart(2, '0');
        formattedHours = formattedHours.toString().padStart(2, '0');
      
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
      }

    return (
        <>
            <div style={{ display: "flex"  ,border:"2px solid grey",padding:"8px 5px",alignItems:"center"}}>
                <button onClick={startStopWatch} style={{ background: "green", padding: "4px", margin: "0px 4px", color: "white" }}>Start</button>
               {time>0&& <button onClick={stopStopWatch} style={{ background: "yellow", padding: "2px", margin: "0px 4px" }}>Pause</button>}
               {time>0 && <button onClick={resetStopWatch} style={{ background: "red", padding: "2px", margin: "0px 4px" }}>Reset</button>}
                <h5>{display}</h5>
            </div>
        </>

    )
}
