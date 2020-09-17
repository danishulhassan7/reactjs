import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import StatefullComponent from './statefullComponent';
import StateLessComponent from './statelessComponent';
import UncontrolComp from './UncontrolComp';
import ControlComp from './ControlComp';
import ContactCard from './Arrays';




class App extends Component {
  render() {


    const contact = {
      "id": 1,
      "name": "Alysia D'Hooge",
      "gender": "Female",
      "email": "adhooge0@wikipedia.org",
      "phone": "1571022046",
      "picture": "http://kvinod.com/old_ci/randomdata/images/women/1.jpg"
  };
    const footerProps = {
      website: 'https://danishulhassan7portfolio.web.app',
      company: 'XPF Inc.',
      year: 2020
    };
    return(
    <div className="app container">
      <AppHeader title="AddressBook App version 1.0.8" subheading="Created by XPF"/>
      <AppContent/>
      <ContactCard contact={contact} />
      <ControlComp/>
      <UncontrolComp/>
      <StatefullComponent/>
      <StateLessComponent/>
      <AppFooter {...footerProps}/>
    </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));