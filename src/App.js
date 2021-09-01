import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

 useEffect( () => {
      try {
         CSS.paintWorklet.addModule("worklet/blobTest.js");
      } catch (e) {
        console.log(e);
      }
    },[]
 )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
