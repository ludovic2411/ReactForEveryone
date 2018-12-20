import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from './container/listContainer';
import Form from './container/form';
import { BrowserRouter, Route, Link } from "react-router-dom";



class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Form/>
        <ListContainer/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
