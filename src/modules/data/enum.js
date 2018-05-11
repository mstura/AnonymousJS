export default function Enum( ...enumuerableElements ){
  const len = enumuerableElements.length;
  let o = {
    [Symbol.iterator]: () =>{
      const keys = Object.keys( o );
      let i = 0;
      return {
        next: () =>{
          if (i < keys.length) {
            return { value: keys[i++], done: false };
          }
          return {value: undefined, done: true};
        }
      };
    }
  };

  for (let i = 0; i < len; i++) {
    const val = enumuerableElements[i];
    o[val] = Symbol(val);
  }

  return Object.freeze(o);
}