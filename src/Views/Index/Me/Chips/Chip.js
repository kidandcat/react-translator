import React, {Component} from 'react';
import {Chip, ChipContact} from 'react-mdl';
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
            <Chip onClick={this.handleClick} id={this.props.id} style={style.chip}>
                <ChipContact style={{
                    background: `url("${this.props.icon}") 0 0 / cover`
                }}/> {this.props.children}
            </Chip>
        )
    }
}

export default Chipp;

style = {
    chip: {
        cursor: 'pointer',
        marginRight: '20px',
        opacity: 0
    }
}
