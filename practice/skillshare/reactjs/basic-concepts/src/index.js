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
import ContactList from './ContactList';




class App extends Component {

  //Using AJAX for getting data from REST Endpoint

  state = {
    contacts: []
  };

  componentDidMount () {
    fetch('http://localhost:4000/contacts/')
    .then(resp=>resp.json())
    .then(data=>this.setState({contacts : data}))
  }



  render() {

// Working With Arrays
    const contact = {
      "id": 1,
      "name": "Alysia D'Hooge",
      "gender": "Female",
      "email": "adhooge0@wikipedia.org",
      "phone": "1571022046",
      "picture": "http://kvinod.com/old_ci/randomdata/images/women/1.jpg"
  };

  const contacts = [
    {
        "id": 2,
        "name": "Ruby Tothe",
        "gender": "Male",
        "email": "rtothe1@usa.gov",
        "phone": "1983800201",
        "picture": "http://kvinod.com/old_ci/randomdata/images/men/2.jpg"
    },
    {
        "id": 3,
        "name": "Reinald Tace",
        "gender": "Male",
        "email": "rtace2@stanford.edu",
        "phone": "7704172788",
        "picture": "http://kvinod.com/old_ci/randomdata/images/men/3.jpg"
    },
    {
        "id": 4,
        "name": "Phoebe Kingsnod",
        "gender": "Female",
        "email": "pkingsnod3@yellowbook.com",
        "phone": "8137639930",
        "picture": "http://kvinod.com/old_ci/randomdata/images/women/4.jpg"
    },
    {
        "id": 5,
        "name": "Sharai Manach",
        "gender": "Female",
        "email": "smanach4@scientificamerican.com",
        "phone": "9459000368",
        "picture": "http://kvinod.com/old_ci/randomdata/images/women/5.jpg"
    }
];

  const contactCards = contacts.map(c=> <ContactCard key={c.id} contact={c}/>)
// Working With Arrays Ends 

    const footerProps = {
      website: 'https://danishulhassan7portfolio.web.app',
      company: 'XPF Inc.',
      year: 2020
    };
    return(
    <div className="app container">
      <AppHeader title="AddressBook App version 1.0.8" subheading="Created by XPF"/>
      <AppContent/>
      <h1 className="alert alert-info">Using AJAX for getting data from REST Endpoint</h1>
      <ContactList contacts={this.state.contacts} />
      <h1 className="alert alert-info">Working with arrays</h1>
      <ContactCard contact={contact} />
      {contactCards}
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