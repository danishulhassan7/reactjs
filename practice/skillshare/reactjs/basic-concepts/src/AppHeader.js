import React, {Component} from 'react';
import './AppHeader.css';


export default class AppHeader extends Component {
    render() {
        return ( 
        <div className="app-header">
            <h1>Hello World, from Danish Ul Hassan</h1>
            <p>{this.props.title} and it is {this.props.subheading}</p>
            <strong>Powered by ReactJS</strong>
            <hr/>
        </div>
        );
    }
}