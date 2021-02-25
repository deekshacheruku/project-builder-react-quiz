import React, { Component } from 'react';
import "./ResultComponent.css"
import Service from './Service';
import ReactDOM from 'react-dom'

class ResultComponent extends Component {
    constructor(){
        super()
        this.attemptedQuestions = 0;
        this.correctQuestions = 0;
        this.wrongQuestions = 0;
        this.score = 0;
        this.questions = 10;
    }
    componentDidMount(){
        this.attemptedQuestions = Service.attemptedQuestions
        this.wrongQuestions = Service.wrongQuestions
        this.correctQuestions = Service.correctQuestions
        this.score = Math.round((this.correctQuestions/10)*100)
        this.renderOutput()
    }

    renderOutput(){
        ReactDOM.render(<p class="score" id="score">Your Score: {this.score}%</p>,document.getElementById("score"))
        ReactDOM.render(<p class="tesxtscore" id="attemptedtext">{this.attemptedQuestions}</p>,document.getElementById("attemptedtext"))
        ReactDOM.render(<p class="tesxtscore" id="correcttext">{this.correctQuestions}</p>,document.getElementById("correcttext"))
        ReactDOM.render(<p class="tesxtscore" id="wrongtext">{this.wrongQuestions}</p>,document.getElementById("wrongtext"))
        ReactDOM.render(<p class="tesxtscore" id="questions">{this.questions}</p>,document.getElementById("questions"))
    }

    render() {
        return (
            <div class="container3">
                <p class="result">Result</p>
                <div class="subcontainer3">
                    <p class="verdicttext">You need more practice!</p>
                    <p class="score" id="score">Your Score: {this.score}%</p>
                    <span class="description">
                        <p class="text">Total no of questions:</p> <p class="tesxtscore" id="questions">{this.questions}</p>
                    </span>
                    <span class="description">
                        <p class="text">Number of questions attempted:</p> <p class="tesxtscore" id="attemptedtext">{this.attemptedQuestions}</p>
                    </span>
                    <span class="description">
                        <p class="text">Number of Correct answers:</p> <p class="tesxtscore" id="correcttext">{this.correctQuestions}</p>
                    </span>
                    <span class="description">
                        <p class="text">Number of Wrong answers:</p> <p class="tesxtscore" id="wrongtext">{this.wrongQuestions}</p>
                    </span>
                </div>
                <div class="subcontainer4">
                    <button class="playagainbutton">Play Again</button>
                    <button class="backbutton">Back To Home</button>
                </div>
            </div>
        );
    }
}

export default ResultComponent;