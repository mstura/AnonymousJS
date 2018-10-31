module.exports = {
  Struct: function Struct( ...properties ){
    const props = properties,
      len = props.length;
  
    function constructor(...args){
      for (let i = 0; i < len; i++) {
        this[props[i]] = args[i];
      }
      return this;
    }
  
    return constructor;
  },
  Enum: function Enum( ...enumuerableElements ){
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
  },
  KeyMap: function KeyMap( objectToMap, transform ){
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
  },
  String: function fString( str, ...defaultValues ){
    const __String = str;
    const __values = defaultValues;
  
    this.print = function print( ...values ){
      const vals = values.length > 0 ? values : __values;
      return formatString(__String, ...vals);
    };
  
    return this;
  
    function formatString( str, ...args ){
      const r = /{(\d+)}/g;
      return str.replace( r, ( match, number ) => {
        return args[number] !== undefined
          ? args[number]
          : match;
      });
    }
  },
  UIDGen: function() {
    var self = {};
    var lut = []; for (var i=0; i<256; i++) { lut[i] = (i<16?'0':'')+(i).toString(16); }
    self.generate = function( options = { useDash: true, base: 32 } ) {
      const sep = options.useDash ? '-' : '';
      var d0 = Math.random()*0xffffffff|0;
      var d1 = Math.random()*0xffffffff|0;
      var d2 = Math.random()*0xffffffff|0;
      var d3 = Math.random()*0xffffffff|0;
  
      switch (options.base) {
      case 16:
        return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+sep+
        lut[d1&0xff]+lut[d1>>8&0xff]+sep+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff];
      case 64:{
        const d4 = Math.random()*0xffffffff|0;
        const d5 = Math.random()*0xffffffff|0;
        const d6 = Math.random()*0xffffffff|0;
        const d7 = Math.random()*0xffffffff|0;
        return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+sep+
        lut[d1&0xff]+lut[d1>>8&0xff]+sep+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+sep+
        lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+sep+lut[d2>>16&0xff]+lut[d2>>24&0xff]+
        lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff]+sep+
        lut[d4&0xff]+lut[d4>>8&0xff]+lut[d4>>16&0xff]+lut[d4>>24&0xff]+sep+
        lut[d5&0xff]+lut[d5>>8&0xff]+lut[d5>>16&0xff]+lut[d5>>24&0xff]+sep+
        lut[d6&0xff]+lut[d6>>8&0xff]+lut[d6>>16&0xff]+lut[d6>>24&0xff]+sep+
        lut[d7&0xff]+lut[d7>>8&0xff]+lut[d7>>16&0xff]+lut[d7>>24&0xff];
      }
      default:
        return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+sep+
        lut[d1&0xff]+lut[d1>>8&0xff]+sep+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+sep+
        lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+sep+lut[d2>>16&0xff]+lut[d2>>24&0xff]+
        lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
      }
    };
    return self;
  },
  
};