import "./App.css";
import { Card3a } from "./components/Card3a/Card3a";
import { Card3b } from "./components/Card3b/Card3b";
import Carousel from "./components/CrousalCard/Crousal";
import { baseUrl } from "./utils/baseUrl";

function App() {
  console.log(baseUrl);
  return (
    <div className="App">
      <Card3a />
      <Card3b />
      <Carousel />
    </div>
  );
}

export default App;
