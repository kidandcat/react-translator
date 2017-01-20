import React, { Component } from 'react';
let kid = require('jairo.jpg');
let style;


class Avatar extends Component {
  render() {
    return (
        <img src={kid} style={style.avatar} />
    )
  }
}

export default Avatar;


style = {
  avatar: {
    marginLeft: '50%',
    width: '300px',
    height: '300px',
    borderRadius: '300px',
    transform: 'translateX(-50%)',
  }
}
