import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [mode, setMode] = useState(true);
  return (
    <>
      {/* <h1 className="head">Count : {count}</h1>
      <div className="app">
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
      </div> */}
      <div
        style={{
          height: "100vh",
          backgroundColor: mode ? "white" : "black",
          color: mode ? "black" : "white",
        }}
      >
        <h1>Mode : {mode ? "Light Mode" : "Dark Mode"}</h1>
        <button onClick={() => setMode(!mode)}>Switch Mode</button>
      </div>
    </>
  );
}

export default App;
