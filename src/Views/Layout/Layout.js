import React, {Component} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';

import {
    Nav,
    Breadcrumb,
    Panel,
    Col,
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    Glyphicon
} from 'react-bootstrap';
let style;
import Logo from 'azul_l.png';

class Lay extends Component {
    render() {
        return (
            <Scrollbars style={style.container}>
                <Navbar fluid style={style.navbar}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <img style={style.logo} src={Logo}></img>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Toggle/>
                    <Navbar.Collapse style={style.menuCollapse}>
                        <Nav>
                            <NavItem href="#/"><Glyphicon glyph="home" style={style.glyph}/><span style={style.navItem}>Inicio</span></NavItem>
                            <NavItem href="#/apps"><Glyphicon glyph="th-large" style={style.glyph}/><span style={style.navItem}>Aplicaciones</span></NavItem>
                            <NavItem href="#/users"><Glyphicon glyph="user" style={style.glyph}/><span style={style.navItem}>Usuarios</span></NavItem>
                            <NavItem href="#/companies"><Glyphicon glyph="equalizer" style={style.glyph}/><span style={style.navItem}>Empresas</span></NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavDropdown title="Usuario" id="basic-nav-dropdown">
                                <MenuItem>Perfil</MenuItem>
                                <MenuItem>Configuración</MenuItem>
                                <MenuItem>Ayuda</MenuItem>
                                <MenuItem divider/>
                                <MenuItem>Salir</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Breadcrumb>
                    {this.props.breads.map(function(bread) {
                      if (bread.active){
                        return (<Breadcrumb.Item key={bread.text} active>
                            {bread.text}
                        </Breadcrumb.Item>);
                      }else{
                        return (<Breadcrumb.Item key={bread.text} href={"#" + bread.href}>
                            {bread.text}
                        </Breadcrumb.Item>);
                      }
                    })}
                </Breadcrumb>
                <Col lg={10} lgOffset={1} md={12}>
                    <Panel>
                        {this.props.children}
                    </Panel>
                </Col>
            </Scrollbars>
        );
    }
}

export default Lay;

style = {
    container: {
        height: '100vh',
        marginTop: '0',
        marginLeft: '0'
    },
    logo: {
        position: 'absolute',
        transform: 'translateY(-15%)',
        height: '70px'
    },
    menuCollapse: {
        marginLeft: '110px'
    },
    navItem: {
        color: 'white'
    },
    glyph: {
        color: '#2795b6',
        fontSize: '1.2em',
        marginRight: '5px',
        transform: 'translateY(10%)'
    },
    navbar: {
        backgroundImage: 'none',
        backgroundColor: '#002539'
    }
}
