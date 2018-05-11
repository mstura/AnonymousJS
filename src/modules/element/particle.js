import { createElement, IdManager } from '../../index';
 
export default function factory(tag, properties, ...children){
  return new Particle(tag, properties, ...children);
}

function Particle(tag, properties, ...children){
  this.__UUID = IdManager.Generate();
  this.tag = tag;
  this.props = properties;
  this.children = new Set(null);

  this.assignChildren( ...children );

  return this;
}

Particle.prototype = {
  assignChildren( ...children ){
    for (const child of children) {
      this.children.add(child);
    }
  },
  removeChildren( ...children ){
    for (const child of children) {
      this.children.remove(child);
    }
  },
  hasMounted(){
    return this.__isRendered;
  },
  render(){
    const __Children = Array.from(this.children);
    this.__rendered = createElement(
      this.tag,
      this.props,
      ...__Children.map(particle => particle.render())
    );
    this.__isRendered = this.__rendered ? true : false;
    return this.__rendered;
  }
};