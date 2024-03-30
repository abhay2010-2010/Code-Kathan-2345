import "./App.css";
import Card2a from "./components/Card2a/Card2a";
import Card5 from "./components/Card5/Card5";
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
      <Card5/>
      <Card2a/>
      <Card2b/>
    </div>
  );
}

export default App;
