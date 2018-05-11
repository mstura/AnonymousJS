import { it, describe } from 'mocha';
import { assert } from 'chai';
import {Struct, Enum} from '../../src/index';

describe('Data Constructs', () => {
  it('struct.js - should produce a Struct factory', () => {
    const name = 'name', age = 'age', job = 'job';
    const Person = Struct(name, age, job); 

    const Jhon = new Person('jhon', 38, 'manager');
    const Jane = new Person('Jane', 18, 'student');
    assert.equal(Jhon.name, 'jhon');
    assert.equal(Jhon.age, 38);
    assert.equal(Jhon.job, 'manager');
    assert.equal(Jane.name, 'Jane');
    assert.equal(Jane.age, 18);
    assert.equal(Jane.job, 'student');
  });

  it('enum.js - should produce a Enum', () => {
    const Colors = Enum( 'red', 'yellow', 'blue', 'green');

    assert.property(Colors, 'red');
    assert.property(Colors, 'yellow');
    assert.property(Colors, 'blue');
    assert.property(Colors, 'green');

    const testMatch = ( value ) => {
      switch (Colors[value]) {
      case Colors.red: return 'red';
      case Colors.yellow: return 'yellow';
      case Colors.blue: return 'blue';
      case Colors.green: return 'green';
      default: return 'default';
      }
    }; 
    let count = 0;
    for (const Color of Colors) {
      const res = testMatch(Color);
      assert.equal(res, Color);
      count ++;
    }
    assert.equal(count, 4);
  });
});