import React from "react";
import ReactDOM from "react-dom";
import ContextApp from "./context/App";
import Radna from "./context/radna";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ContextApp />
      <Radna />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
