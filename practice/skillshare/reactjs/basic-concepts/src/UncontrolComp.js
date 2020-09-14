import React, {Component} from 'react';
import './UncontrolComp.css';

export default class UncontrolComp extends Component {
    render() {
        return(
            <div className="container mt-3">
                <h1 className="my-2 alert alert-info">Refs (Uncontrolled Components)</h1>
                <h2>Add a new contact</h2>
                <form className="form">
                    <div className="form-group-row">
                        <label htmlFor="name" className="control-label col-md-3">
                            Name: 
                        </label>
                        <div className="col-md-5">
                            <input type="text" name="name" className="form-control"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}