import {IdManager} from '../../index';

export default function shadowElement( reference ) {
  this.__pID = IdManager.Generate();
  this.ref = reference;

  this.state = {
    innerHTML : reference.innerHTML,
    outerHTML : reference.outerHTML,
    className : reference.className,
    children : []
  };

  this.changed = false;
}

shadowElement.prototype.updateState = function updateState( newState ){
  this.previousState = this.state;
  Object.assign( this.state, newState );
};
  
shadowElement.prototype.hasChanged = function hasChanged(){
  return this.changed;
};