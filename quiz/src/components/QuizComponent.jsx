import React, { Component } from 'react';
import './QuizComponent.css';
import ReactDOM from 'react-dom'
import Questions from "../resources/questions.json"
import Service from"./Service.js"
import ResultComponent from './ResultComponent';
import Countdown from "react-countdown";

class QuizComponent extends Component {
    constructor(){
        super();
        this.state = {
            currentQuestionNumber : 1,
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
        if(this.state.currentQuestionNumber < 15){
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
        // 0th element in json is for quit purpose
        this.setState( { currentQuestionNumber : 0 } )
    }

    OnClickButtonHandler = (event) =>{
        Service.attemptedQuestions = Service.attemptedQuestions + 1
        let UserAnswer = event.target.value
        if(UserAnswer == Questions[this.state.currentQuestionNumber].answer){
            ReactDOM.render(<div className="correctbutton">Correct Answer!</div>,document.getElementById("answerbutton"))
            Service.correctQuestions = Service.correctQuestions + 1
        }
        else{
            ReactDOM.render(<div className="wrongbutton">Wrong Answer!</div>,document.getElementById("answerbutton"))
            Service.wrongQuestions = Service.wrongQuestions + 1
        }
        if(this.state.currentQuestionNumber == 15)
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
        // this.setState( { currentQuestionNumber : 15 } )
        let quizdiv=document.getElementById("quiz")
        quizdiv.setAttribute("class","hide")
        ReactDOM.render(<ResultComponent></ResultComponent>,document.getElementById("result"))
    }

    renderer = ({ minutes, seconds }) => {
        if (seconds == 0 && minutes == 0) {
            this.GameOver()
            return (<span></span>)
        }
        if (seconds < 10)
            return ( <span>0{minutes}:0{seconds}</span> );
        else
            return ( <span>0{minutes}:{seconds}</span> );
      };

    render() {
        return (
            <div className="container2">
                <div id="answerbutton"></div>
                <h1 className="quizheader">Question</h1>
                <div className="subcontainer1">
                    <p className="noofquestion">{this.state.currentQuestionNumber} of 15</p>
                    <p className="question">{Questions[this.state.currentQuestionNumber].question}</p>
                    <p className="timer"><Countdown date={Date.now() + 120000} renderer={this.renderer}></Countdown></p>
                </div>
                <div className="optionbutton">
                    <button onClick={this.OnClickButtonHandler} value={Questions[this.state.currentQuestionNumber].optionA}> {Questions[this.state.currentQuestionNumber].optionA}</button>
                    <button onClick={this.OnClickButtonHandler} value={Questions[this.state.currentQuestionNumber].optionB}> {Questions[this.state.currentQuestionNumber].optionB}</button>
                    <button onClick={this.OnClickButtonHandler} value={Questions[this.state.currentQuestionNumber].optionC}> {Questions[this.state.currentQuestionNumber].optionC}</button>
                    <button onClick={this.OnClickButtonHandler} value={Questions[this.state.currentQuestionNumber].optionD}> {Questions[this.state.currentQuestionNumber].optionD}</button>
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