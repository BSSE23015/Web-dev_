import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <NavBar />
      <div>{value}</div>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
