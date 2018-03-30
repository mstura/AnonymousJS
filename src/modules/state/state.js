/**
 * Single State management object
 */
let ELEMENTS = [];

class State {
  
  static getAllElements(){
    return ELEMENTS;
  }

  static getChangedElements(){
    return ELEMENTS.map( e => e.changed === true );
  }
}

export default State;