import React, { Component } from 'react';
let style;

class Name extends Component {
  render() {
    return (
        <div style={style.name}>Jairo Caro-Accino Viciana</div>
    )
  }
}

export default Name;


style = {
  name: {
    marginLeft: '50%',
    display: 'inline-block',
    transform: 'translateX(-50%)',
    fontSize: '60px',
    marginTop: '70px',
    color: '#545659'
  }
}
