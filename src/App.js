import React, { Component } from 'react';
import Interface from './components/interface.js'
import CanvasWrapper from './components/canvasWrapper.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Interface></Interface>
        <CanvasWrapper></CanvasWrapper>
      </div>
    );
  }
}

export default App;
