import React, { Component } from 'react';
import './App.css';
import LandingPage from './landingPage.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Breathing</p>
          <LandingPage />
        </header>
      </div>
    );
  }
}

export default App;
