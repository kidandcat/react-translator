import React, {Component} from 'react';
import {movil, stylex} from 'helpers';
import {Zoom} from 'animations';

let kid = require('jairo.jpg');
let style;

class Avatar extends Component {
    componentDidMount() {
        movil(() => {
            style.avatar.width = '150px';
            style.avatar.height = '150px';
            this.forceUpdate();
        }, () => {
            style.avatar.width = '300px';
            style.avatar.height = '300px';
            this.forceUpdate();
        });
        Zoom('#avatar');
    }
    render() {
        return (<img src={kid} alt="Avatar" id="avatar" style={stylex(style.avatar)}/>)
    }
}

export default Avatar;

style = {
    avatar: {
        marginLeft: '50%',
        width: '300px',
        height: '300px',
        borderRadius: '300px',
        transform: 'translateX(-50%)'
    }
}
