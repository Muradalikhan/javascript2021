import { useState } from "react";
import "./App.css";
import { db } from "./config/firebase";
import { ref, set } from "firebase/database";

function App() {
  const [task, setTask] = useState("");
  const addTodo = () => {
    set(ref(db, "Todo/"), {
      task,
      complete: false,
    });
    setTask("");
  };
  return (
    <div className="App">
      <h2>firebase Todo</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="write task..."
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default App;
