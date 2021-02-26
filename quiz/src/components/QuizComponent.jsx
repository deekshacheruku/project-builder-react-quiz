import React, { Component } from 'react';
import './QuizComponent.css';
import ReactDOM from 'react-dom'
import Service from"./Service.js"
import ResultComponent from './ResultComponent';
import Countdown from "react-countdown";

class QuizComponent extends Component {
    constructor(){
        super();
        this.state = {
            currentQuestionNumber : 1,
            questionarray : Service.questionArray
        }        
    }

    OnClickPreviousButtonHandler = () =>{
        if(this.state.currentQuestionNumber > 1){
            let previousbtn = document.getElementById("previousbutton")
            previousbtn.setAttribute("class","previousbutton")
            this.setState(PreviousState => ({
                currentQuestionNumber : PreviousState.currentQuestionNumber - 1
            }))
        }
        else{
            this.setState( { currentQuestionNumber : 1 } )
            let previousbtn = document.getElementById("previousbutton")
            previousbtn.setAttribute("class","previousbutton changecolor")
        }
    }

    OnClickNextButtonHandler = () =>{
        if(this.state.currentQuestionNumber < 10){
            let previousbtn = document.getElementById("previousbutton")
            previousbtn.setAttribute("class","previousbutton")
            this.setState(PreviousState => ({
                currentQuestionNumber : PreviousState.currentQuestionNumber + 1
            }))
        }
        else
            this.GameOver()
    }

    OnClickQuitButtonHandler = () =>{
        this.GameOver()
    }

    OnClickAnswerButtonHandler = (event) =>{
        Service.attemptedQuestions = Service.attemptedQuestions + 1
        let UserAnswer = event.target.value
        if(UserAnswer == this.state.questionarray[this.state.currentQuestionNumber].answer){
            ReactDOM.render(<div className="correctbutton">Correct Answer!</div>,document.getElementById("answerbutton"))
            Service.correctQuestions = Service.correctQuestions + 1
        }
        else{
            ReactDOM.render(<div className="wrongbutton">Wrong Answer!</div>,document.getElementById("answerbutton"))
            Service.wrongQuestions = Service.wrongQuestions + 1
        }
        if(this.state.currentQuestionNumber == 10)
            this.GameOver()
        else{
            this.setState(PreviousState => ({
                currentQuestionNumber : PreviousState.currentQuestionNumber + 1
            }))
            let previousbtn = document.getElementById("previousbutton")
            previousbtn.setAttribute("class","previousbutton")
        }
    }

    GameOver(){
        alert("Game is over!")
        let quizdiv=document.getElementById("quiz")
        quizdiv.setAttribute("class","hide")
        ReactDOM.render(<ResultComponent></ResultComponent>,document.getElementById("result"))
    }

    CountDownComplete = () => {
        this.setState(PreviousState => ({
            currentQuestionNumber : PreviousState.currentQuestionNumber + 1
        }))
        if(this.state.currentQuestionNumber == 10)
            this.GameOver()
    } 

    renderer = ({ minutes, seconds}) => {
        if (seconds < 10)
            return ( <span>0{minutes}:0{seconds}</span> );
        else
            return ( <span>0{minutes}:{seconds}</span> );
      }

    render() {
        return (
            <div className="container2">
                <div id="answerbutton"></div>
                <h1 className="quizheader">Question</h1>
                <div className="subcontainer1">
                    <p className="noofquestion">{this.state.currentQuestionNumber} of 10</p>
                    <p className="question">{this.state.questionarray[this.state.currentQuestionNumber].question}</p>
                    <p className="timer"> <Countdown  onComplete={this.CountDownComplete} date={Date.now() + 10000 } key={this.state.currentQuestionNumber} renderer={this.renderer}></Countdown></p>
                </div>
                <div className="optionbutton">
                    <button onClick={this.OnClickAnswerButtonHandler} value={this.state.questionarray[this.state.currentQuestionNumber].options[0]}> {this.state.questionarray[this.state.currentQuestionNumber].options[0]}</button>
                    <button onClick={this.OnClickAnswerButtonHandler} value={this.state.questionarray[this.state.currentQuestionNumber].options[1]}> {this.state.questionarray[this.state.currentQuestionNumber].options[1]}</button>
                    <button onClick={this.OnClickAnswerButtonHandler} value={this.state.questionarray[this.state.currentQuestionNumber].options[2]}> {this.state.questionarray[this.state.currentQuestionNumber].options[2]}</button>
                    <button onClick={this.OnClickAnswerButtonHandler} value={this.state.questionarray[this.state.currentQuestionNumber].options[3]}> {this.state.questionarray[this.state.currentQuestionNumber].options[3]}</button>
                </div>
                <div className="subcontainer2">
                    <button className="previousbutton changecolor" id="previousbutton" onClick={this.OnClickPreviousButtonHandler}>Previous</button>
                    <button className="nextbutton" id="nextbutton" onClick={this.OnClickNextButtonHandler}>Next</button>
                    <button className="quitbutton" onClick={this.OnClickQuitButtonHandler}>Quit</button>
                </div>
            </div>
        );
    }
}

export default QuizComponent;