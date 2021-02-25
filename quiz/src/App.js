import HomeComponent from "./components/HomeComponent.jsx";
import Service from "./components/Service.js"
import axios from "axios"
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    axios.get("https://my-json-server.typicode.com/Naveen132895/quiz-api/questions")
        .then(response =>{
            Service.questionArray = response.data
        })
        .catch(error =>{
            console.log(error)
        })
  }
  render() {
    return (
      <div className="App">
        <div id="home"><HomeComponent/></div>
        <div id="quiz"></div>
        <div id="result"></div>
    </div>
    );
  }
}

export default App;
