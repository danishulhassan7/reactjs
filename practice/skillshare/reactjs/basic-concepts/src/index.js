import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';


class App extends Component {
  render() {
    return <div>
      <AppHeader/>
      <h3>Created by Facebook's Software Engineer in 2011</h3>
      <AppFooter/>
    </div>;
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));