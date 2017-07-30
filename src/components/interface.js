import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';

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


  rulesetPlaceholder = JSON.stringify({
    'F' : 'E+',
    'E' : 'F-',
  });


  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <form>
            <FieldGroup
            id="formControlsText"
            type="text"
            label="Seed"
            placeholder="EFEF"
            />
            <FormGroup controlId="ruleset">
              <ControlLabel>Rules</ControlLabel>
              <FormControl componentClass="textarea" placeholder={this.rulesetPlaceholder} />
            </FormGroup>
            <Button className="generateButton">Generate</Button>
          </form>
        </div>
      </div>
    );
  }
}
