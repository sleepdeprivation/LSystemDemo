import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';

export default class Instructions extends Component {

  constructor(){
    super();
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
        <div className="title-button-container">
          <Button className="open-button" onClick={ ()=> this.setState({ open: !this.state.open })}>
            {!this.state.open ?
                <span className="glyphicon glyphicon-chevron-right"></span>
              : <span className="glyphicon glyphicon-chevron-down"></span>}
          </Button>
          <h2>L Systems</h2>
        </div>
              <Panel  className="container-fluid"
                      collapsible expanded={this.state.open}>
              <div className="row">
                <div className="col-md-12">
                  <h3>What is an L-System?</h3>
                  <p>
                    L-Systems are generative systems that operate
                    on an initial string, referred to below as the <em>seed</em>,
                    using a set of replacement rules.
                  </p>
                  <p>
                     Each iteration, our string is examined character by character,
                     and a replacement rule is applied. Through this process, we
                     generate another string with which we can begin the process anew.
                  </p>
                  <p>
                    An interesting way to look at this sequence of strings is as
                    instructions for a <em>write-head</em>. The write-head presented
                    here responds to the following instructions:
                  </p>
                </div>
              </div>
                <div className="row">
                  <div className="col-md-12">
                    <table className="table">
                      <tr>
                        <td>
                          <strong>E</strong>
                        </td>
                        <td>
                          "Move forward"
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>F</strong>
                        </td>
                        <td>
                          "Move forward"
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>+</strong>
                        </td>
                        <td>
                          "Turn Right"
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>-</strong>
                        </td>
                        <td>
                          "Turn Left"
                        </td>
                      </tr>
                    </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        Below Is an interface that you can use to explore L-Systems.
                      </p>
                      <p>
                        But <strong>BE CAREFUL</strong>. String rewriting systems like
                        this one can quickly get out of hand, and will eat your memory
                        and crash your browser if iterated too many times.
                      </p>
                      <p>
                        The <strong>Generate</strong> button below defaults
                        to <strong>8</strong> iterations, but you can use
                        the <strong>Step</strong> button to iterate as many times as you like.
                      </p>
                    </div>
                  </div>
                </Panel>
                </div>
        </div>
    );
  }
};
