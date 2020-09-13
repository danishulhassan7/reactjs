import React from 'react';
import './AppFooter.css'

export default function AppFooter({website,company,year}) {
    return (
        <div>
            <p className="app-footer">&copy; {year} All rights reserved by 
             <a href={website} target="_blank"> {company}</a>.</p>
        </div>
    );
}