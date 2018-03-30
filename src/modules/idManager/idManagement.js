
let regids = [];
let nextid = 0;

function getNextID(){
  let id = nextid;
  nextid++;
  return id;
}

function __register( id ){
  //if ( regids.indexOf( id ) === -1 ){
  regids.push( id );
  /*  return true;
  }
  return false;*/
}

export default {
  Generate(){
    /*let id = Math.floor( Math.random() * 10000000000 );
    return __register( id ) ? id : this.Generate();*/
    let id = getNextID();
    __register( id );
    return id;
  },

  Delete( id ){
    let pos = regids.indexOf( id );
  
    if ( pos === -1) return false;
  
    regids.splice( pos, 1 );
  
    return true;
  },

  clearIds(){
    regids = [];
  }

};
