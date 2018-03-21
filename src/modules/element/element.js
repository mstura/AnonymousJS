import { IdManager } from '../../index';

export default function CreateElement( tagName, attributes, ...children ) {
    if( attributes instanceof _Element || typeof attributes !== 'object' ) {
      children.splice(0,0, attributes);
      attributes = undefined;
    }
    this.__ID = IdManager.Generate();
    this.tagName = tagName;
    this.children = [];
    this.childOf = undefined;
    this.$ = document.createElement( tagName );
    if ( attributes ) this.assignAllAttributes( attributes );
    if ( children ) this.assignChildren( children );
  }

  function assignAllAttributes( attributes = {} ){
    for (const key in attributes) {
      const value = attributes[ key ];
      this.assignAttribute( key, value );
    }
  }

  function assignValue( value ){
    if( !value ) return;
    this.$.innerHTML = value;
  }

  function assignAttribute( attrName, value ){
    let attr = document.createAttribute( attrName );
    if ( value ) attr.value = value;
    return this.$.setAttributeNode( attr );
  }

  function assignChild( child ){
    this.children.push( child );
    child.childOf = this.__ID;
    this.$.appendChild( child.getElement() );
  }

  function assignChildren( children ){
    if( !children ) return;
    let cl = children.length;
    for (let index = 0; index < cl; index++) {
      const child = children[ index ];
      child instanceof _Element ? this.assignChild( child ) : this.assignValue( child );
    }
  }

  function getElement(){
    return this.$;
  }
}

