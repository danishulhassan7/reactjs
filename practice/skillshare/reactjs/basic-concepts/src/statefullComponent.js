import React, {Component} from 'react';

export default class StatefullComponent extends Component {
    state = {
        num:0
    };

    // increment = () => {
    //     this.setState({num: this.state.num +1});
    // }
    // decrement = () => {
    //     this.setState({num: this.state.num -1});
    // }

    incrementOrdecrement = (value) => {
        this.setState({num: this.state.num + value});
    }
    render() {
        return(
            <div className="container">
                <h4 className="alert alert-info">
                React JS Counter Application Using StatefullComponent
                </h4>
                <h5>The Value of Num is: {this.state.num}</h5>
                <button className="btn btn-primary" onClick={()=>this.incrementOrdecrement(1)}>
                    Increment
                </button>
                <button className="ml-2 btn btn-primary" onClick={()=>this.incrementOrdecrement(-1)}>
                    Decrement
                </button>
            </div>
        );
    }
}