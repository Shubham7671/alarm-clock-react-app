import React, { useState } from 'react';
import Alarm from './components/Alarm';
import './App.css';


function App() {
  let [alert, setAlert] = useState(true);
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px auto" }}>Alarm Clock</h1>
      <Alarm />

    </>
  );
}

export default App;
