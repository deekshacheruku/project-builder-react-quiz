import React, { Component } from 'react';
import './QuizComponent.css';
import Questions from "../resources/questions.json"

class QuizComponent extends Component {
    constructor(){
        super();
        this.state = {
            currentQuestionNumber : 1
        }
    }

    OnClickPreviousButtonHandler = () =>{
        if(this.state.currentQuestionNumber > 1){
            this.setState(PreviousState => ({
                currentQuestionNumber : PreviousState.currentQuestionNumber - 1
            }))
        }
        else{
            this.setState( { currentQuestionNumber : 1 } )
        }
    }

    OnClickNextButtonHandler = () =>{
        if(this.state.currentQuestionNumber < 15){
            this.setState(PreviousState => ({
                currentQuestionNumber : PreviousState.currentQuestionNumber + 1
            }))
        }
        else{
            this.setState( { currentQuestionNumber : 15 } )
        }
    }

    OnClickQuitButtonHandler = () =>{
        // 0th element in json is for quit purpose
        this.setState( { currentQuestionNumber : 0 } )
    }


    render() {
        return (
            <div className="container2">
                <h1 className="quizheader">Question</h1>
                <div className="subcontainer1">
                    <p className="noofquestion">{this.state.currentQuestionNumber} of 15</p>
                    <p className="question">{Questions[this.state.currentQuestionNumber].question}</p>
                </div>
                <div className="optionbutton">
                    <button> {Questions[this.state.currentQuestionNumber].optionA}</button>
                    <button> {Questions[this.state.currentQuestionNumber].optionB}</button>
                    <button> {Questions[this.state.currentQuestionNumber].optionC}</button>
                    <button> {Questions[this.state.currentQuestionNumber].optionD}</button>
                </div>
                <div className="subcontainer2">
                    <button className="previousbutton" onClick={this.OnClickPreviousButtonHandler}>Previous</button>
                    <button className="nextbutton" onClick={this.OnClickNextButtonHandler}>Next</button>
                    <button className="quitbutton" onClick={this.OnClickQuitButtonHandler}>Quit</button>
                </div>
            </div>
        );
    }
}

export default QuizComponent;