import { it, describe } from 'mocha';
import { assert } from 'chai';
import { IdManager } from '../../src/index';

describe('IdManager', () => {
  const ids = [],
    count = 50000;
  it('should generate new ids that do not collide', () => {
    for (let index = 0; index < count; index++) {
      const id = IdManager.Generate();
      assert.equal( ids.indexOf( id ), -1 );
      ids.push( id );
    }
  });
  it('should delete an existing ID from memory', () => {
    let length = ids.length;
    for (let index = 0; index < length; index++) {
      assert.equal( IdManager.Delete( ids[ index ] ), true );
    }
  });
});