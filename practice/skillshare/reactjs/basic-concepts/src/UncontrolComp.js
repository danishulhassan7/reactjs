import React, {Component} from 'react';
import './UncontrolComp.css';

export default class UncontrolComp extends Component {

    addNewContact = (event) => {
        console.log("Add New Contact...");
        const name = this.ref.name.value;
        const email = this.ref.email.value;
        const phone = this.ref.phone.value;
        const picture = this.ref.picture.value;

        const p1 = {name,email,phone,picture};
        console.log('p1');

        this.ref.name.value = '';
        this.ref.email.value = '';
        this.ref.phone.value = '';
        this.ref.picture.value = '';
        event.preventDefault();
    }
    render() {
        return(
            <div className="container mt-3">
                <h1 className="my-2 alert alert-info">Refs (Uncontrolled Components)</h1>
                <h2>Add a new contact</h2>
                <form className="form" onSubmit={this.addNewContact}>
                    <div className="form-group-row">
                        <label htmlFor="name" className="control-label col-md-4">
                            Name: 
                        </label>
                        <div className="col-md-6">
                            <input type="text" ref="name" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="email" className="control-label col-md-4">
                            Email: 
                        </label>
                        <div className="col-md-6">
                            <input type="text" ref="email" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="phone" className="control-label col-md-4">
                            Phone:  
                        </label>
                        <div className="col-md-6">
                            <input type="text" ref="phone" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <label htmlFor="photo" className="control-label col-md-4">
                            Picture:
                        </label>
                        <div className="col-md-6">
                            <input type="text" ref="picture" className="form-control"/>
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