import React, { Component } from 'react';
import "./ResultComponent.css"

class ResultComponent extends Component {
    render() {
        return (
            <div class="container3">
                <p class="result">Result</p>
                <div class="subcontainer3">
                    <p class="verdicttext">You need more practice!</p>
                    <p class="score">Your Score: 20%</p>
                    <span class="description">
                        <p class="text">Total no of questions:</p> <p class="tesxtscore">15</p>
                    </span>
                    <span class="description">
                        <p class="text">Number of questions:</p> <p class="tesxtscore">9</p>
                    </span>
                    <span class="description">
                        <p class="text">Number of Correct answers:</p> <p class="tesxtscore">3</p>
                    </span>
                    <span class="description">
                        <p class="text">Number of Wrong answers:</p> <p class="tesxtscore">6</p>
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