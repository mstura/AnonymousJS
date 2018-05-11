import { it, describe } from 'mocha';
import { assert } from 'chai';
import { Particle } from '../../src/index';

describe('Particle.js', () => {

  require( 'jsdom-global' )();

  it('should create new Particle Object', () => {
    const tag = 'div', attributes = { class: 'greetings', id: 'helloDiv', required: undefined, customParam:'customID' };
    
    const Els = Particle( tag,
      attributes,
      Particle(tag),
      Particle(tag),
      Particle(tag)
    );

    assert.equal(Els.tag, 'div');
    assert.isDefined(Els.__UUID);
    assert.deepEqual(Els.props, attributes);
    assert.equal(Els.children.size, 3);
    let count = 0;
    for (const child of Els.children) {
      assert.equal(child.tag, 'div');
      assert.isUndefined(child.props);
      assert.equal(child.children.size, 0);
      count++;
    }
    assert.equal(count, 3);
  });

  it('should render a Particle object', () => {
    const tag = 'div', attributes = { class: 'greetings', id: 'helloDiv', required: undefined, customParam:'customID' };
    
    const El = Particle( tag,
      attributes,
      Particle(tag),
      Particle(tag),
      Particle(tag)
    );
    const e = El.render();
    assert.equal(El.hasMounted(), true);
    assert.instanceOf(El.__rendered, HTMLElement);
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