/**
 * Single State management object
 */
let ELEMENTS = [];

class State {
  
  static getAllElements(){
    return ELEMENTS;
  }

  static setState( pID, thisArg, currentState ){
    let ele = ELEMENTS.find( e => e.pID === pID );
    if ( ele instanceof StateElement ){
      ele.updateState( currentState );
    } else {
      new StateElement( pID, thisArg, currentState );
    }
  }

  static getChangedElements(){
    return ELEMENTS.map( e => e.changed === true );
  }
}

class StateElement {
  constructor( id, thisArg, currentState ){
    this.pID = id;
    this.TYPE = thisArg.constructor.name;
    this.state = currentState;
    this.changed = true;
    ELEMENTS.push( this );
  }

  updateState( newState ){
    this.previousState = this.state;
    Object.assign( this.state, newState );
  }

  hasChanged(){
    return this.changed;
  }
}

export default State;