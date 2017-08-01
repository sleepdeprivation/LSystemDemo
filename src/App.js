import React, { Component } from 'react';
import Interface from './components/interface.js'
import CanvasWrapper from './components/canvasWrapper.js'
import Instructions from './components/instructions.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">

        <Instructions></Instructions>

        <Interface></Interface>
        <CanvasWrapper></CanvasWrapper>

            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                You can find this and other projects of mine over
                at <a href="https://github.com/sleepdeprivation">my github</a>
              </div>
            </div>
      </div>
    );
  }
}

export default App;
