import "./App.css";
import { Allroutes } from "./routes/Allroutes";
import { baseUrl } from "./utils/baseUrl";

function App() {
  console.log(baseUrl);
  return (
    <div className="App">
      <Allroutes />


      <Footer/>

      
    </div>
  );
}

export default App;
