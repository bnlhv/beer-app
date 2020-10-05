import React from 'react';
import './App.css';

import NavigationBar from '../Components/NavigationBar'
import About from '../Components/About'
import Home from '../Components/Home'
import Breweries from '../Components/Breweries'
import Brewery from '../Components/Brewery'
import noMatch from '../Components/noMatch'
import Jumbotron from '../Components/Jumbotron'

import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
      <Container fluid className="p-0 app">
        <Router>
          <NavigationBar/>
          <Jumbotron/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/breweries" exact component={Breweries} />
            <Route path="/breweries/:id" component={Brewery} />
            <Route component={noMatch} />
          </Switch>
        </Router>
      </Container> 
  );
}

export default App;
