import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
import './numberBox.css'

class NumberBox extends Component {

  constructor(props){
    super();
    this.state = {
      label : props.label || "Counter",
      count : props.count || 0
    }
    this.onChange = props.onChange;
  }

  increment(){
    this.onChange({type: 'increment', newValue: this.state.count + 1});
    this.setState({
      count : this.state.count + 1
    })
  }

  decrement(){
      this.onChange({type: 'decrement', newValue: this.state.count - 1});
      this.setState({
        count : this.state.count - 1
      });
  }

  numberChanged(e){
    this.onChange({type: 'change', newValue: e.target.value});
    this.setState({
      count : e.target.value
    });
  }

  render() {
    return (
      <div className="NumberBox">
        <FormGroup controlId="">
          <ControlLabel>{this.state.label}</ControlLabel>
          <FormControl
          componentClass="input"
          value={this.state.count}
          onChange={this.numberChanged.bind(this)} />
          <Button className="button-minus" onClick={this.decrement.bind(this)}>
            <span className="glyphicon glyphicon-minus"></span>
          </Button>
          <Button className="button-plus" onClick={this.increment.bind(this)}>
            <span className="glyphicon glyphicon-plus"></span>
          </Button>
        </FormGroup>
      </div>
    );
  }
}

export default NumberBox;
