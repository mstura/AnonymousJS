import { it, describe } from 'mocha';
import { assert } from 'chai';
import { IdManager } from '../../src/index';

describe('IdManager', () => {
  it('should generate new ids that do not collide', () => {
    let count = 90000,
      ids = [];
    for (let index = 0; index < count; index++) {
      const id = IdManager.Generate();
      assert.equal( ids.indexOf( id ), -1 );
      ids.push( id );
    }
  });
});