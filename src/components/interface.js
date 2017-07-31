import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';

import dispatcher from '../dispatcher';
import systemStore from '../store/lsystem'
import NumberBox from '../ui.components/numberBox'

import "./css/interface.css"

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

export default class Interface extends Component {

  constructor(){
    super();
    this.state = {
      seed : systemStore.getSeed(),
      rules : JSON.stringify(systemStore.getRuleset()),
      lineWidth : 3
    }
  }

  componentWillMount(){
    systemStore.on('change', ()=>{
      this.setState({
          seed : systemStore.getSeed(),
          rules : JSON.stringify(systemStore.getRuleset()),
      })
    })
  }

  rulesetPlaceholder = JSON.stringify({
    'F' : 'E+',
    'E' : 'F-',
  });

  clickedGenerate(){
    dispatcher.dispatch({type: "generate"});
  }

  clickedStep(){
    dispatcher.dispatch({type: "step"});
  }

  rulesetChanged(e){
    dispatcher.dispatch({type: "rulesetChanged", ruleset: e.target.value});
  }

  seedChanged(e){
    console.log("seed changed!", e.target.value);
    dispatcher.dispatch({type: "seedChanged", seed: e.target.value});
  }

  lineWidthChange(e){
    console.log("changed nbox!");
    this.setState({
      lineWidth: e.newValue
    });
    dispatcher.dispatch({type: "lineWidthChange", newValue: e.newValue});
  }

  render() {
    console.log("rednering", this.state);
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <form>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Seed"
              value={this.state.seed}
              onChange={this.seedChanged}
              placeholder="EFEF"
            />
            <FormGroup controlId="ruleset">
              <ControlLabel>Rules</ControlLabel>
              <FormControl componentClass="textarea" value={this.state.rules} onChange={this.rulesetChanged.bind(this)} />
            </FormGroup>
            <FormGroup controlId="ruleset">
              {this.state.lineWidth}
              <NumberBox
                className="generateButton"
                label="Line Width"
                count={this.state.lineWidth}
                onChange={this.lineWidthChange.bind(this)}></NumberBox>
            </FormGroup>
            <Button className="generateButton" onClick={this.clickedGenerate} >Generate</Button>
            <Button className="generateButton" onClick={this.clickedStep} >Step Once</Button>
          </form>
        </div>
      </div>
    );
  }
}
