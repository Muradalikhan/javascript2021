import "./App.css";
import { useState } from "react";
import Toaster from "./component/toaster";
// -------------------------------------------------------
import { addData } from "./config/firebase";
import ShowData from "./component/ShowData";
// -------------------------------------------------------

function App() {
  const [task, setTask] = useState("");
  const addTodo = () => {
    const obj = { task, complete: false };
    addData("Todo", obj);
    setTask("");
  };
  return (
    <div className="App">
      <h2>firebase Real-Time Todo</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="write task..."
        style={{ padding: "10px" }}
      />
      <button onClick={addTodo} style={{ padding: "10px" }}>
        Add
      </button>

      <ShowData />
      <Toaster />
    </div>
  );
}

export default App;
