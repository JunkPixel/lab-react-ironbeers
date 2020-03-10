import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AllBeers from './Components/AllBeers';
import BeerDetails from './Components/BeerDetails';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import RandomBeer from './Components/RandomBeer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers/:id" exact component={BeerDetails} />
          <Route path="/beers" exact component={AllBeers} />
          <Route path="/random-beer" component={RandomBeer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
