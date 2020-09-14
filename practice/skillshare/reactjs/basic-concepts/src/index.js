import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import StatefullComponent from './statefullComponent';
import StateLessComponent from './statelessComponent';

// For linking 

import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';


class App extends Component {
  render() {

    const footerProps = {
      website: 'https://danishulhassan7portfolio.web.app',
      company: 'XPF Inc.',
      year: 2020
    };
    return(
    <div className="app">
      <AppHeader title="AddressBook App version 1.0.8" subheading="Created by XPF"/>
      <AppContent/>
      <StatefullComponent/>
      <StateLessComponent/>
      <AppFooter {...footerProps}/>
      <NavLink activeClassName="active" to="/">HEllO</NavLink>
    </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));