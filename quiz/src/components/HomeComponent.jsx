import React, { Component } from 'react';
import './HomeComponent.css'

class HomeComponent extends Component {
    render() {
        return (
            <div className = "container1">
                <h1 className = "header">Quiz App</h1>
                <button className = "playbutton">Play</button>
            </div>
        );
    }
}

export default HomeComponent;