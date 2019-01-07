import React, { Component } from 'react';
import { Label } from './components/Label';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Label>
            CoA
          </Label>
        </header>
      </div>
    );
  }
}

export default App;
