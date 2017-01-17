import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

const style = {
  glyphicon: {
    fontSize: '22px',
    top: '7px',
    marginRight: '3px',
    lineHeight: 0,
    color: 'rgb(51, 122, 183)',
  },
  saldo: {
    verticalAlign: 'middle',
    width: '8em',
    borderRight: '1px solid black',
    paddingRight: '30px',
    boxSizing: 'border-box'
  },
  saldoBlock: {
    color: 'rgb(51, 122, 183)',
    display: 'inline-block',
    position: 'absolute',
    top: '1em',
    fontSize: '0.9em',
    textAlign: 'left',
    lineHeight: '1em',
    height: '3em',
    marginLeft: '7px'
  }
}

class Saldo extends Component {
  render() {
    return (
      <div style={style.saldo}>
        <Glyphicon style={style.glyphicon} glyph="briefcase" />
        <div style={style.saldoBlock}>
          <span>Mi saldo</span>
          <br/>
          <span><strong>70 000,0 €</strong></span>
        </div>
      </div>
    )
  }
}

export default Saldo;
