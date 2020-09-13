import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  render() {
    return <div>
      <h1>Hello World, from Danish Ul Hassan</h1>
      <strong>Powered by ReactJS</strong>
      <hr/>
    </div>;
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));