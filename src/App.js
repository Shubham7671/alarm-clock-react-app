
import Alarm from './components/Alarm';
import './App.css';
import Clock from './components/Clock';


function App() {
  return (
    <>
          <div style={{ margin:"30px 30px",textAlign:"right",fontSize:"19px",padding:"7px"}}><Clock/></div>
      <h2 style={{ textAlign: "center", margin: "20px auto" }}>Alarm Clock</h2>

      <Alarm />

    </>
  );
}

export default App;
