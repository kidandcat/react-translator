import React, { Component } from 'react';
import Github from 'Index/Me/Chips/Github';
import Stackoverflow from 'Index/Me/Chips/Stackoverflow';
let style;

class Social extends Component {
  render() {
    return (
        <div style={style.name}>
          <Github />
          <Stackoverflow />
        </div>
    )
  }
}

export default Social;


style = {
  name: {
    marginLeft: '50%',
    display: 'flex',
    transform: 'translateX(-50%)',
    marginTop: '30px',
    fontSize: '60px'
  }
}
