import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppContent from './AppContent';


class App extends Component {
  render() {
    return(
    <div>
      <AppHeader/>
      <AppContent/>
      <AppFooter/>
    </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));