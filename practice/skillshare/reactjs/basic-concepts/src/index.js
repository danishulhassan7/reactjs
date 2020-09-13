import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import './index.css'


class App extends Component {
  render() {
    return(
    <div className="app">
      <AppHeader title="AddressBook App version 1.0.8" subheading="Created by XPF"/>
      <AppContent/>
      <AppFooter/>
    </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));