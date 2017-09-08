import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <h3>Testing component of Materialize css</h3>
        </div>
          <div className="container">
              <div className="row">
                  <div className="col s1">1</div>
                  <div className="col s1">2</div>
                  <div className="col s1">3</div>
                  <div className="col s1">4</div>
                  <div className="col s1">5</div>
                  <div className="col s1">6</div>
                  <div className="col s1">7</div>
                  <div className="col s1">8</div>
                  <div className="col s1">9</div>
                  <div className="col s1">10</div>
                  <div className="col s1">11</div>
                  <div className="col s1">12</div>
              </div>
              <div className="card-panel teal lighten-2">This is a card panel with a teal lighten-2 class</div>
          </div>
      </div>
    );
  }
}

export default App;
