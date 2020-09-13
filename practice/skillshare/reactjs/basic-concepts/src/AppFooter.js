import React from 'react';
import './AppFooter.css'

export default function AppFooter(props) {
    return (
        <div>
            <p className="app-footer">&copy; {props.year} All rights reserved by 
             <a href={props.website} target="_blank"> {props.company}</a>.</p>
        </div>
    );
}