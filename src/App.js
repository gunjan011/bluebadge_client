import React, { Component } from "react";
import NavBar from "./home/Navbar";
import Splash from "./home/Splash";
import Auth from './auth/Auth';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import GetInspired from "./GetInspired";
import PoemOne from "./FamousPoems/PoemOne";
import PoemTwo from "./FamousPoems/PoemTwo";
import PoemThree from "./FamousPoems/PoemThree";
import PoemFour from "./FamousPoems/PoemFour";
import PoemFive from "./FamousPoems/PoemFive";

class App extends Component {

  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  logout = () => {
    this.setState({
      sessionToken: '',
    });
    localStorage.clear();
  }

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path='/' exact>
            <Splash sessionToken={this.state.sessionToken} />
          </Route>
        </Switch>
      )
    } else {
      return (
        <Switch>
          <Route path="/" exact>
            <Auth setToken={this.setSessionState} />
          </Route>
          <Route path="/getinspired" exact>
            <GetInspired />
          </Route>
          <Route exact path="/poemone"><PoemOne /></Route>
          <Route exact path="/poemtwo"><PoemTwo /></Route>
          <Route exact path="/poemthree"><PoemThree /></Route>
          <Route exact path="/poemfour"><PoemFour /></Route>
          <Route exact path="/poemfive"><PoemFive /></Route>
        </Switch>
      )
    }
  }

  render() {
    return (
      <Router>
        <div className= "App">
          <NavBar clickLogout={this.logout} />
          {this.protectedViews()}
        </div>
        
      </Router>
    );
  }
}

export default App;