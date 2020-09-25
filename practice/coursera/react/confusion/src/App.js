import React, { Component }from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import DetailedMenuComp from './components/DetailedMenuComp';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return(
      <div className="App">
        <Navbar dark color="info">
          <div className="container">
            <NavbarBrand href="/"><h3>XPF Delicious Fooderia</h3></NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes} />
        <DetailedMenuComp dishes = {this.state.dishes} />
      </div>
    );
  }
}


export default App;
