import React, {Component} from 'react';
import {movil, stylex} from 'helpers';
let style;

class Name extends Component {
    componentDidMount() {
        movil(() => {
            style.name.fontSize = '30px';
            this.forceUpdate();
        }, () => {
            style.name.fontSize = '60px';
            this.forceUpdate();
        });
    }
    render() {
        return (
            <div style={stylex(style.name)}>Jairo <span style={style.caro}>Caro-Accino</span> Viciana</div>
        )
    }
}

export default Name;

style = {
    name: {
        marginLeft: '50%',
        display: 'inline-block',
        transform: 'translateX(-50%)',
        fontSize: '60px',
        marginTop: '70px',
        lineHeight: '30px'
    },
    caro: {
      whiteSpace: 'nowrap'
    }
}
