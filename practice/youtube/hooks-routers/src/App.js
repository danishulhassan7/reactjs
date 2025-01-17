import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} /> */}

        {/* NEW SYNTAX */}


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services/:service">
            <Services />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
