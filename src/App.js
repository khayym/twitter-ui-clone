import 'bootstrap/dist/css/bootstrap.min.css';
import './root.css';
import './App.css';
import React, { Component } from 'react'
import Main from './components/Main';
import Aside from './components/Aside';
import Navigation from './components/Navigation';

export default class App extends Component {
  render() {
    return (
      <div className="container d-flex flex-row">
        <Navigation col='2' />
        <Main col='7' />
        <Aside col='3' />
      </div>
    )
  }
}
