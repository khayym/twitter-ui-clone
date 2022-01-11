import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/open-sans";
import './root.css';
import './App.css';
import React, { Component } from 'react'
import Main from './components/Main';
import Aside from './components/Aside';
import Navigation from './components/Navigation';


export default class App extends Component {
  render() {
    return (
      <div className="d-flex flex-row justify-content-center">
        <Navigation col='' />
        <Main col='' />
        <Aside col='' />
      </div>
    )
  }
}
