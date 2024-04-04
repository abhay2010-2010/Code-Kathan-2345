import { useEffect, useRef, useState } from "react";
import "./App.css";
import { InitialLoader } from "./components/InitialLoader/InitialLoader";
import { Allroutes } from "./routes/Allroutes";
import { baseUrl } from "./utils/baseUrl";

function App() {
  console.log(baseUrl);
  const [view, setVeiw] = useState(false);
  let id = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    id.current = setTimeout(() => {
      setVeiw(true);
    }, 2000);
  }, []);

  return <div className="App">{!view ? <InitialLoader /> : <Allroutes />}</div>;
}

export default App;
