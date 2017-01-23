import React, {Component} from 'react';
import {movil} from 'helpers';
let style;

class Name extends Component {
    render() {
        if (movil()) {
            style.name.fontSize = '30px';
            return (
                <div style={style.name}>Jairo
                    <span style={{display: 'inline-block'}}>
                        Caro-Accino
                    </span>
                    Viciana</div>
            )
        } else {
            return (
                <div style={style.name}>Jairo Caro-Accino Viciana</div>
            )
        }
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
    }
}
