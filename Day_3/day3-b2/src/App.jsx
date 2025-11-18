import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import PModal from "./components/PModal";

function App() {
  const [st, setSt] = useState(false);
  return (
    <div>
      <h1>Main App</h1>
      {/* <Modal /> */}
      <button onClick={() => setSt(!st)}>Get Modal using Portal</button>
      {st && (
        <PModal>
          <h1>This Modal is rendered Outside the Main App</h1>
        </PModal>
      )}
    </div>
  );
}

export default App;
