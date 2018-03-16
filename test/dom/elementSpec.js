import { it, describe } from 'mocha';
import { assert } from 'chai';
import { _Element } from '../../src/index';

describe('Element creation and manipulation', () => {

  require( 'jsdom-global' )();

  it('should create a new HTML Element', () => {
    const tag = 'div', attributes = { class: 'greetings', id: 'helloDiv', required: undefined, customParam:'customID' };
    let child1 = new _Element('span', 'hello'), child2 = new _Element('span', 'world');
    let children = [ child1, child2 ];
    let el = new _Element( tag, attributes, 'hello world' , ...children );
    let $ = el.getElement();
    assert.instanceOf( el, _Element );
    assert.instanceOf( $, HTMLElement );
    assert.equal( $.innerHTML, 'hello world<span>hello</span><span>world</span>');
    assert.equal( $.className, 'greetings' );
    assert.equal($.id, 'helloDiv');
    assert.equal( $.attributes.customParam.value, 'customID' );
    assert.property( $.attributes, 'required' );
    assert.equal(el.children.length, 2);
    assert.equal(child1.childOf, el.__ID);
    assert.equal(child2.childOf, el.__ID);
  });
});