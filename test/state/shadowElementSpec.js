import { it, describe } from 'mocha';
import { assert } from 'chai';
import { shadowElement, createElement } from '../../src/index';

describe('shadowElement', () => {
  it('should create a shadow element of a dom element', () => {
    let el = createElement( 'div', {
      class: 'divBox',
      required: true
    });

    let __el = new shadowElement( el );

    assert.strictEqual(__el.ref, el, 'checking reference');
    assert.deepEqual(__el.state, {
      innerHTML: '',
      outerHTML: '<div class="divBox" required="true"></div>',
      className: 'divBox',
      children:[]
    }, 'check for state');
  });
});