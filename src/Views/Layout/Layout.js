import React, {Component} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
let style;

class Lay extends Component {
    render() {
        return (
            <Scrollbars style={style.container}>
                    <div style={style.navbar}></div>
                    {this.props.children}
            </Scrollbars>
        );
    }
}

export default Lay;

style = {
    container: {
        height: '100vh',
        marginTop: '0',
        marginLeft: '0',
        overflowY: 'hidden'
    },
    navbar: {
        backgroundColor: 'rgb(74, 74, 74)',
        zIndex: 1010,
        width: '4000px',
        transform: 'translateX(-50%)',
        height: '70px',
        position: 'fixed'
    }
}
