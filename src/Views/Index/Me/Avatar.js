import React, { Component } from 'react';
import Av from 'material-ui/Avatar';
let kid = require('jairo.jpg');



class Avatar extends Component {
  render() {
    return (
        <Av src={kid} style={style.avatar} size={400}/>
    )
  }
}

export default Avatar;


const style = {
  avatar: {
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    marginTop: '30px'
  }
}
