import React, { Component } from 'react'


export default class BiblePlugin extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//biblia.com/api/logos.biblia.js";
    this.div.appendChild(script);
  }
  render() {
    return (
      <div className='BiblePlugin' ref={el => (this.div = el)}>
               <biblia:bible layout="normal" resource="leb" width="400" height="600" startingReference="Ge1.1"></biblia:bible>

      </div>
    )
  }
}
