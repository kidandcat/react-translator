import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
        <div style={style.name}>Jairo Caro-Accino Viciana</div>
    )
  }
}

export default Name;


const style = {
  name: {
    marginLeft: '50%',
    display: 'inline-block',
    transform: 'translateX(-50%)',
    fontSize: '60px'
  }
}
