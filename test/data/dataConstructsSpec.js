import { it, describe } from 'mocha';
import { assert } from 'chai';
import {Struct, Enum, fString, KeyMap} from '../../src/index';

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

  it('fString.js should return a format string object', () => {
    const str = 'this {0} is a string formating {1} and it should create {0} and {2}',
      formatter = new fString(str, 'string', 'object', 'work'),
      emptyFormatter = new fString(str);

    assert.equal(formatter.print(),'this string is a string formating object and it should create string and work' );
    assert.equal(formatter.print('foo', 'bar', 'tang'), 'this foo is a string formating bar and it should create foo and tang');
    assert.equal(emptyFormatter.print(), 'this {0} is a string formating {1} and it should create {0} and {2}');
    assert.equal(emptyFormatter.print('foo', 'bar', 'play'), 'this foo is a string formating bar and it should create foo and play');
  });

  it('KeyMap.js should return a frozen mapping of the keys of an object mapped to the key names', () => {
    const object = {
      hello:'world',
      1: 'world',
      foo: 'bar'
    };

    const map = KeyMap( object );

    assert.property(map, 'hello');
    assert.equal(map.hello, 'hello');
    assert.property(map, 'foo');
    assert.equal(map.foo, 'foo');
    assert.property(map, 1);
    assert.equal(map[1], 1);
  });

  it('KeyMap.js should return a frozen mapping of the keys of an object mapped to the transformed key names', () => {
    const object = {
      heLLo:'world',
      fFc: 'world',
      foo: 'bar'
    };

    const map = KeyMap( object, ( key ) => key.toLowerCase() );

    assert.property(map, 'hello');
    assert.equal(map.hello, 'heLLo');
    assert.property(map, 'foo');
    assert.equal(map.foo, 'foo');
    assert.property(map, 'ffc');
    assert.equal(map.ffc, 'fFc');
  });
});