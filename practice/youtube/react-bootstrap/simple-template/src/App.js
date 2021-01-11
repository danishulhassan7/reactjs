import React, {Component} from 'react';
// import { Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {NoMatch} from './components/NoMatch';



class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
