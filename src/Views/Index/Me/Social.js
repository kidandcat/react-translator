import React, { Component } from 'react';
import Github from 'Index/Me/Chips/Github';
let style;

class Social extends Component {
  render() {
    return (
        <div style={style.name}>
          <Github />
        </div>
    )
  }
}

export default Social;


style = {
  name: {
    marginLeft: '50%',
    display: 'inline-block',
    transform: 'translateX(-50%)',
    marginTop: '30px',
    fontSize: '60px'
  }
}
