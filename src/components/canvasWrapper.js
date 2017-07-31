import React, { Component } from 'react';
import './css/canvasWrapper.css';
import lsystems from '../lib/lsystems'

import '../dispatcher';
import systemStore from '../store/lsystem'

export default class CanvasWrapper extends Component {

  canvas = null;

  constructor(){
    super();
    this.state = {
      system : systemStore.getSystem()
    }
  }

  getCanvas(){
    if(this.canvas == null){
      this.canvas = document.getElementById("canvas");
    }
    console.log("got canvas", this.canvas);
    return this.canvas;
  }

  tryToClear(){
      if(this.renderer){
        this.renderer.clear();
      }
  }

  canvasRender(){
      var renderCfg = {
        system : this.state.system,
        canvas : this.getCanvas(),
        increment : systemStore.getLineWidth(),
      }
      this.renderer = (new lsystems.LSystemRenderer(renderCfg));
      this.renderer.clear();
      this.renderer.draw();
  }

  componentDidMount(){
    this.canvasRender();
    window.renderer = this.renderer;
  }

  componentWillMount(){
    systemStore.on('change', ()=>{
      this.setState({
          system : systemStore.getSystem()
      })
      this.renderer.increment = systemStore.getLineWidth();
      this.canvasRender();
    })
  }

  render() {
    this.tryToClear();
    return (
      <div className="canvasWrapper col-md-8 col-md-offset-2"  >
        <canvas id="canvas"
                width="500px"
                height="500px">
        </canvas>
      </div>
    );
  }
}
