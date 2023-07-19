import React, { useEffect, useState } from 'react'
import alarmSound from './assests/alarmSound.mp3'

export default function Timer(prop) {
  let min = (prop.hour * 60) + (prop.min);

  let [time, setTime] = useState(min);
  let [sound, setSound] = useState(false);
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')} hr ${remainingSeconds.toString().padStart(2, '0')} min`;
    return formattedTime;
  }

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime((prev) => {
        if (prev == 1) {
          clearInterval(intervalId);
          setSound(true)

        }
        return prev - 1;
      })
    }, 1000 * 30);

    let cleanInterval = () => {
      clearInterval(intervalId);
    }
    return cleanInterval;
  }, [])
  let play = () => {
    new Audio(alarmSound).play();
    setSound(false)
  }

  return (
    <>
      {time > 0 ? <h6>Ring in {formatTime(time)}</h6> : <div style={{ background: "blue", padding: "4px", borderRadius: "2px" }}>Wake Up<img style={{ width: "21px" }} src='https://clipground.com/images/sound-icon-white-png-2.png' />  </div>}
      {sound && play()}
    </>
  )
}
