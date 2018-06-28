export default function KeyMap( objectToMap, transform ){
  const __keys = Object.keys( objectToMap ),
    l = __keys.length;

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

  for (let i = 0; i < l; i++) {
    const keyValue = __keys[i],
      objKey = transform ? transform(keyValue) : keyValue;
    
    o[objKey] = keyValue;
  }

  return Object.freeze(o);
}