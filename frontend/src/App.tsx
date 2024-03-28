import "./App.css";
import { baseUrl } from "./utils/baseUrl";
import { Allroutes } from "./routes/Allroutes";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  console.log(baseUrl);
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
    </div>
  );
}

export default App;
