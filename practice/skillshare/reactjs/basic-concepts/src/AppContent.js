import React, { Component } from 'react';
import './AppContent.css';

export default class AppContent extends Component {
    btnHandler = () => {
        console.log("Button is Clicked",this);
    }
    render() {
        return ( 
        <div className = "app-content">
            <h3> React is created by Facebook in 2011 </h3>
            <button onClick={this.btnHandler} className="btn btn-primary">Click</button>
             </div >
        );
    }
}