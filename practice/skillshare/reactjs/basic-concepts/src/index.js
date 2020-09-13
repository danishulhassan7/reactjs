import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import './index.css'


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
      <AppFooter website={footerProps.website} company={footerProps.company} year={footerProps.year} />
    </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));