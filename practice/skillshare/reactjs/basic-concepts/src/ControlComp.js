import React, {Component} from 'react';
import './UncontrolComp.css';

export default class ControlComp extends Component {
    state = {
        name = '',
        email = '',
        phone ='',
        picture =''
    }
    render() {
        return(
            <div className="container mt-3">
                <h1 className="my-2 alert alert-info">Controlled Components Demo</h1>
                <h2>Add a new contact</h2>
                <form className="form" onSubmit={}>
                    <div className="form-group-row">
                        <label htmlFor="name" className="control-label col-md-4">
                            Name: 
                        </label>
                        <div className="col-md-6">
                            <input type="text" name="name" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="email" className="control-label col-md-4">
                            Email: 
                        </label>
                        <div className="col-md-6">
                            <input type="text" name="email" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="phone" className="control-label col-md-4">
                            Phone:  
                        </label>
                        <div className="col-md-6">
                            <input type="text" name="phone" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="photo" className="control-label col-md-4">
                            Picture:
                        </label>
                        <div className="col-md-6">
                            <input type="text" name="picture" className="form-control"/>
                        </div>
                    </div>
                    <div className="my-2 col-md-3">
                    <button type="submit" className="btn btn-primary">Save Data</button>
                    </div>
                </form>
            </div>
        );
    }
}