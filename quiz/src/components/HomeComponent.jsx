import React, { Component } from 'react';
import './HomeComponent.css'
import QuizComponent from './QuizComponent';
import ReactDOM from 'react-dom'

class HomeComponent extends Component {

    OnClickButtonHandler = () =>{
        let varible=document.getElementById("home")
        varible.setAttribute("class","hide")
        ReactDOM.render(<QuizComponent></QuizComponent>,document.getElementById("quiz"))
    }

    render() {
        return (
                <div className = "container1" id="container">
                    <h1 className = "header" id="header">Quiz App</h1>
                    <button className = "playbutton" id="button" onClick={this.OnClickButtonHandler}>Play</button>
                </div>
        );
    }
}

export default HomeComponent;