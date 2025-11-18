// import React, { Suspense, useState } from "react";
// const BigComponent = React.lazy(() => import("./components/BigComponent"));
import "./App.css"
import style from "./app.module.css"

import ControlledComponent from "./components/ControlledComponent";
import SimpleFormValidation from "./components/SimpleFormValidation";
import UncontrolledComponent from "./components/UncontrolledComponent";

// const ExtraInfo = React.lazy(() => import("./components/ExtraInfo"));

const head2={
  color:"green"
}

function App() {
  // const [showInfo, setShowInfo] = useState(false);

  return (
    <div>   
      {/* traditional css */}
      <h1 className="head1">My App</h1>
      {/* inline css */}
      <h2 style={{color:"yellow"}}>I am Working on CSS</h2>
      <h3 style={head2}>Same Inline but different Presentation</h3>
      {/* module css */}
      <h4 className={style.head4}>Hi I am module CSS.......</h4>
      
      {/* <Suspense fallback={<p>loading... the Big component</p>}>
        <BigComponent />
      </Suspense>
      <button onClick={() => setShowInfo(true)}>Show More Info</button>
      {showInfo && (
        <Suspense fallback={<h3>Loading the extra Info...</h3>}>
          <ExtraInfo />
        </Suspense>
      )} */}
      {/* <ControlledComponent/> */}
      {/* <UncontrolledComponent/> */}
      <SimpleFormValidation/>
    </div>
  );
}

export default App;
