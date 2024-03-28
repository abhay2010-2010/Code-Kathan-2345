import React from "react";
import "./App.css";
import { baseUrl } from "./utils/baseUrl";
import { Allroutes } from "./routes/Allroutes";

function App() {
  console.log(baseUrl);
  return (
    <div className="App">
      <Allroutes />
    </div>
  );
}

export default App;
