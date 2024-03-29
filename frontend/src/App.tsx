import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Allroutes } from "./routes/Allroutes";
import { baseUrl } from "./utils/baseUrl";

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
