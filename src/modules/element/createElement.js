function assignAllAttributes( element, attributes = {} ){
  for (const key in attributes) {
    const value = attributes[ key ];
    assignAttribute( element, key, value );
  }
}

function assignAttribute( element, attrName, value ){
  let attr = document.createAttribute( attrName );
  if ( value ) attr.value = value;
  element.setAttributeNode( attr );
}

function assignChild( element, child ){
  element.appendChild( child );
}

function assignChildren( element, children ){
  let cl = children.length;
  for (let index = 0; index < cl; index++) {
    const child = children[ index ];
    if( child instanceof HTMLElement ) assignChild( element, child );
    else element.innerHTML += child ;
  }
}

export default function createElement( tagName, attributes, ...children ) {
    
  let element = document.createElement( tagName );

  if ( attributes ) assignAllAttributes( element, attributes );
  if( children ) assignChildren( element, children );

  return element;
}