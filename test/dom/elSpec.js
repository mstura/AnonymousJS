import { it, describe } from 'mocha';
import { assert } from 'chai';
import { Element } from '../../src/index';

describe('Element creation and manipulation', () => {

  require( 'jsdom-global' )();

  it('should create new Element Object', () => {
    const tag = 'div', attributes = { class: 'greetings', id: 'helloDiv', required: undefined, customParam:'customID' };
    
    const El = Element( tag,
      attributes,
      Element(tag),
      Element(tag),
      Element(tag)
    );
    const e = El.render();
    assert.equal( e.tagName.toLowerCase(), tag );
    assert.equal( e.className, 'greetings' );
    assert.equal( e.id, 'helloDiv' );
    assert.equal( e.attributes.customParam.value, 'customID' );
    assert.property( e.attributes, 'required' );
    e.childNodes.forEach(c => {
      assert.equal(c.tagName.toLowerCase(), tag);
    });
    assert.equal(e.childNodes.length, 3);

  });
});