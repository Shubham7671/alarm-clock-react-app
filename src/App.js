
import Alarm from './components/Alarm';
import './App.css';
import Clock from './components/Clock';
import StopWatch from './components/StopWatch';


function App() {
  return (
    <>
      <div style={{justifyContent:"space-between",display:"flex",padding:"10px 15px",margin:"10px"}}>
        <div ><StopWatch /></div>
        <div ><Clock /></div>
      </div>

      <h2 style={{ textAlign: "center", margin: "20px auto" }}>Alarm Clock</h2>

      <Alarm />

    </>
  );
}

export default App;
