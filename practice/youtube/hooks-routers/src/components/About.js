import React from 'react';
import { useHistory } from 'react-router-dom';

function About() {
    const history = useHistory();
    return(
        <div>
            <h1>About Page</h1>
            <button className="btn waves-effect waves-light"
             onClick={()=> history.goBack()}>
                Go To Home Page
            </button>
        </div>
    );
}

export default About;