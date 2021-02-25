import HomeComponent from "./components/HomeComponent.jsx";
import './App.css';


function App() {
  return (
    <div className="App">
      <div id="home"><HomeComponent/></div>
      <div id="quiz"></div>
      <div id="result"></div>
    </div>
  );
}

export default App;
