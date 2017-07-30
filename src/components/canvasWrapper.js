import React, { Component } from 'react';
import './css/canvasWrapper.css';
import '../lib/lsystems'

export default class CanvasWrapper extends Component {

  initiateLystems(){
    
  }

  render() {
    return (
      <div className="canvasWrapper">
        <canvas id="canvas" width="1200" height="800"></canvas>
      </div>
    );
  }
}
