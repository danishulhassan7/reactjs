import React, {Component} from 'react';

const Btn = ({handler,caption}) => (
    <button className="btn btn-primary ml-1" onClick={handler}>
        {caption}
    </button>
);

export default class StatelessComponent extends Component {
    state = {
        num:0
    };

    incrementOrdecrement = (value) => {
        this.setState({num: this.state.num + value});
    }
    render() {
        return(
            <div className="container">
                <h4 className="mt-2 alert alert-info">
                React JS Counter Application Using StatelessComponent
                </h4>
                <h5>The Value of Num is: {this.state.num}</h5>
                <Btn caption="Increment" handler={()=>this.incrementOrdecrement(1)} />
                <Btn caption="Decrement" handler={()=>this.incrementOrdecrement(-1)} />

            </div>
        );
    }
}