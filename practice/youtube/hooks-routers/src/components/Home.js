import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();
    return (
        <div>
            <h1>Home Page</h1>
            <button className="btn waves-effect waves-light"
             onClick={()=> history.push('/about')}>
                Go To About Page
            </button>
        </div>
    );
}

export default Home;