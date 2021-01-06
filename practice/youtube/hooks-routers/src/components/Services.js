import React from 'react';
import {useParams} from 'react-router-dom';

function Services() {
    const {service} = useParams();
    return(
        <div>
            <h1>Services Page</h1>
            <p>Which kind of service you need: {service} </p>
        </div>
    );
}

export default Services;