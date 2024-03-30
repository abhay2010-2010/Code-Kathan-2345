import "./App.css";

import Footer from "./components/Footer/Footer";
import Card2b from "./components/card2b/Card2b";
import { Navbar } from "./components/navbar/Navbar";
import { Allroutes } from "./routes/Allroutes";
import { baseUrl } from "./utils/baseUrl";

function App() {
  console.log(baseUrl);
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <Footer/>

    </div>
  );
}

export default App;
