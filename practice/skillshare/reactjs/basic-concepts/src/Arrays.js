import React from 'react';

const ContactCard = ({contact}) => (
    <div className="card" style={ {width: '400px', padding:'10px', margin:'10px, text-align:left'}}>
        <img src="{contact.picture}" alt="{contact.name}"
        className="card-img img-thumbnail"
        style={{width:'130px', height:'130px'}}  />

    <div className="card-body">
        <h5 className="card-title"> {contact.name} </h5>
        <div className="card-text"> {contact.email} </div>
        <div className="card-text"> {contact.phone} </div>
    </div>
        {/* <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8"></div>
        </div> */}
    </div>
);

export default ContactCard;