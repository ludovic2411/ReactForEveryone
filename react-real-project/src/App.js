import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from './container/listContainer';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Home from './presentationnal/home';
import NoMatch from './presentationnal/404';
import authFormContainer from './container/authFormContainer';

class App extends Component {

  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route path="/list" render={(props)=><ListContainer {...props} privileged={false}/> }/>
          <Route path="/admin" component={authFormContainer}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
