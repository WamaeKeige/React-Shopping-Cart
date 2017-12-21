import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sales from './Sales';

class App extends Component {
  render() {
    var goods = [
      {name: 'Charcoal 5 kg', price: 250 },
      {name: 'Spinach bundle 3 kg', price: 150.69},
      {name: '20 litre Bucket', price: 53},
      {name: '5 litre Oil', price: 59},
      {name: 'Cigar', price: 4.99},
      {name: 'Jelly', price: 8},
      {name: 'Clay Pot', price: 9.99},
      {name: 'Yarn Bundle', price: 10},
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Store</h1>
        </header>
        <p className="App-intro">
          Choose Products To Buy.
          <Sales items={goods}/>
        </p>
      </div>
    );
  }
}

export default App;
