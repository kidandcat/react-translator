import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon, Image } from 'react-bootstrap';
import logo_netelip from 'logo_netelip.png';
import Saldo from 'TopBar/Saldo';
import Avatar from 'TopBar/Avatar';
import {multiStyle}  from 'helpers';


const style = {
  glyphicon: {
    fontSize: '22px',
    top: '7px',
    marginRight: '3px',
    lineHeight: 0,
    color: 'rgb(51, 122, 183)',
  },
  glyphSmall: {
    fontSize: '15px',
    top: '2px',
    lineHeight: 0,
    color: 'rgb(51, 122, 183)',
  },
  blue: {
    color: 'rgb(51, 122, 183)',
  },
  img: {
    width: '30%',
    transform: 'translateY(10%)',
  }
}


class TopBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect fluid>
        <Navbar.Header>
          <Image style={style.img} src={logo_netelip} />
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem><Glyphicon style={multiStyle(style, 'glyphicon', 'glyphSmall')} glyph="envelope" />
              <span style={style.blue} className="TopBar-blue">Ayúdanos</span>
            </NavItem>
            <NavItem>
              <Saldo />
            </NavItem>
            <NavItem><Glyphicon style={style.glyphicon} glyph="bell" /></NavItem>
            <NavItem><Glyphicon style={style.glyphicon} glyph="cog" /></NavItem>
            <Avatar />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default TopBar;
