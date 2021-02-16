import React, { Component } from 'react';
import './QuizComponent.css';

class QuizComponent extends Component {
    render() {
        return (
            <div className="container2">
                <h1 className="quizheader">Question</h1>
                <div className="subcontainer1">
                    <p className="noofquestion">4 of 15</p>
                    <p className="question">Which is the only mammal that can't jump?</p>
                </div>
                <div className="optionbutton">
                    <button >Dog</button>
                    <button >Goat</button>
                    <button >Elephant</button>
                    <button >Lion</button>
                </div>
                <div className="subcontainer2">
                    <button className="previousbutton">Previous</button>
                    <button className="nextbutton">Next</button>
                    <button className="quitbutton">Quit</button>
                </div>
            </div>
        );
    }
}

export default QuizComponent;