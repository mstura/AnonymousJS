import { createElement } from '../../index';
 
export default function factory(tag, properties, ...children){
  return new Element(tag, properties, ...children);
}

function Element(tag, properties, ...children){
  this.tag = tag;
  this.props = properties;
  this.children = new Set(null);

  this.assignChildren( ...children );

  return this;
}

Element.prototype = {
  assignChildren( ...children ){
    for (const child of children) {
      this.children.add(child);
    }
  },
  removeChildren( ...children ){

  },

  render(){
    const __Children = Array.from(this.children);
    return createElement(
      this.tag,
      this.props,
      ...__Children.map(element => element.render())
    );
  }
};