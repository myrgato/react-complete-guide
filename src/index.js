import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Person from "./components/Person";

function App() {
  return (
    <>
      <Person name="Vini" age={23} />
      <Person name="Maíra" age={22} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
