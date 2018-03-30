import { it, describe } from 'mocha';
import { assert } from 'chai';
import { createElement } from '../../src/index';

describe('Element creation and manipulation', () => {

  require( 'jsdom-global' )();

  it('should create a new HTML Element', () => {
    const tag = 'div', attributes = { class: 'greetings', id: 'helloDiv', required: undefined, customParam:'customID' };
    let child1 = createElement('span', { class: 'span'},'hello'), child2 = createElement('span',{ class: 'span'}, 'world');
    let children = [ 'hello',child1, child2, 'world'];
    let el = createElement( tag, attributes, ...children );
    assert.instanceOf( el, HTMLElement );
    assert.equal( el.innerHTML, 'hello<span class="span">hello</span><span class="span">world</span>world');
    assert.equal( el.className, 'greetings' );
    assert.equal( el.id, 'helloDiv');
    assert.equal( el.attributes.customParam.value, 'customID' );
    assert.property( el.attributes, 'required' );
    assert.equal( el.children.length, 2 );
  });
});