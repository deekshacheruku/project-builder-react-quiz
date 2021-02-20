import HomeComponent from "./components/HomeComponent.jsx";
import QuizComponent from "./components/QuizComponent.jsx";
import ResultComponent from "./components/ResultComponent.jsx";
import './App.css';

//Replace the componennt names to view the output.

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
