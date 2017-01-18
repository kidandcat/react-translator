import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import avatar from 'avatar.jpeg';

const style = {
  avatar: {
    height: '30px',
    width: '30px',
    transform: 'translateY(40%)',
    marginLeft: '1em',
    cursor: 'pointer'
  }
}

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    alert('clicked');
    event.preventDefault();
  }

  render() {
    return (
      <Image style={style.avatar} src={avatar} onClick={this.handleClick} circle />
    )
  }
}

export default Avatar;
