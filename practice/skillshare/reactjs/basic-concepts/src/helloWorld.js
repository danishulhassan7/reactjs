import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
      let msg = "Hello, World !";
      let name = "XPF";
        return <div>
          <h1>{msg} from {name} </h1>
          <hr/>
          </div> ;
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));