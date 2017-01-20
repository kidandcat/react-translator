import React, { Component } from 'react';
import Stackoverflow from 'Index/Me/Chips/Stackoverflow';
import Github from 'Index/Me/Chips/Github';
import Linkedin from 'Index/Me/Chips/Linkedin';
let style;

class Social extends Component {
  render() {
    return (
        <div style={style.name}>
          <Github/>
          <Linkedin/>
          <Stackoverflow />
        </div>
    )
  }
}

export default Social;


style = {
  name: {
    display: 'inline-block',
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    marginTop: '80px',
  }
}
