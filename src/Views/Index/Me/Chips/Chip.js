import React, {Component} from 'react';
import {Random} from 'animations';
let style;

class Chipp extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        window.open(this.props.link, '_blank');
    }

    render() {
        setTimeout(() => {
            Random('#' + this.props.id);
        }, 500)
        return (
            <div onClick={this.handleClick} id={this.props.id} style={style.chip}>
                <img alt="chip" style={style.chipImage} src={this.props.icon}/> {this.props.children}
            </div>
        )
    }
}

export default Chipp;

style = {
    chip: {
        cursor: 'pointer',
        marginRight: '20px',
        opacity: 0,
        height: '32px',
        padding: '0 12px 0 0',
        border: 0,
        borderRadius: '16px',
        display: 'inline-block',
        color: 'rgba(0,0,0, 0.87)',
        whiteSpace: 'nowrap',
        backgroundColor: 'rgb(213, 213, 213)'
    },
    chipImage: {
        height: '32px',
        width: '32px',
        borderRadius: '16px',
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: '8px',
        overflow: 'hidden',
        textAlign: 'center',
        fontSize: '18px',
        lineHeight: '32px',
        backgroundColor: 'rgb(213, 213, 213)'
    }
}
