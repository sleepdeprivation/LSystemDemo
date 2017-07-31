import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';
import lsystems from '../lib/lsystems'

class LSystemStore extends EventEmitter{

  system : any;
  lineWidth = 50;

  constructor(){
    super();
    this.system = (new lsystems.LSystemGenerator()).dragonCurve();
    this.seed = this.system.instructions;
    this.ruleset = this.system.productionRules;
    this.system.stepn(8);
  }

  generate(){
    console.log(this.system);
    this.system.productionRules = this.ruleset;
    this.system.instructions = this.seed;
    this.system.stepn(8);
  }

  getSystem(){
    return this.system;
  }

  getRuleset(){
    return this.ruleset;
  }

  getSeed(){
    return this.seed;
  }

  changeSeed(seed){
    this.system.instructions = seed;
    this.seed = seed;
  }

  changeRuleset(ruleset : string){
    this.system.ruleset = JSON.parse(ruleset);
    this.ruleset = JSON.parse(ruleset);
  }

  stepSystem(){
    this.system.step();
  }

  getLineWidth(){
    console.log("got line width!", this.lineWidth)
    return this.lineWidth;
  }

  lineWidthChange(newValue){
    this.lineWidth = newValue;
    console.log("set line width!", newValue, this.lineWidth)
  }

  handleActions(actions){
    console.log("got action!", actions)
    switch(actions.type){
      case 'generate':
        this.generate();
        break;
      case 'rulesetChanged':
        this.changeRuleset(actions.ruleset);
        break;
      case 'seedChanged':
        this.changeSeed(actions.seed)
        break;
      case 'step':
        this.stepSystem(actions.seed)
        break;
      case 'lineWidthChange':
        this.lineWidthChange(actions.newValue)
        break;
      default:

        break;
    }

    //everything causes change
    this.emit("change");

  }



}

const systemStore = new LSystemStore();
export default systemStore;
dispatcher.register(systemStore.handleActions.bind(systemStore));
