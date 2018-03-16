import { it, describe } from 'mocha';
import { assert } from 'chai';
import { State } from '../../src/index';

describe('State object management', () => {
  it('should ', () => {
    const state = new State();

    assert.instanceOf(state, State);
  });
});