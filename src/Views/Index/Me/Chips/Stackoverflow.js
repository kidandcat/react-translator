import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import {grey400} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
let icon = require('stack2.png');
let style;

class One extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        window.open('https://stackoverflow.com/users/4158710/jairo', '_blank');
    }
    render() {
        return (
            <Chip backgroundColor={grey400} style={style.chip} onClick={this.handleClick}>
                <Avatar src={icon}/>
                Stackoverflow
            </Chip>
        )
    }
}

export default One;

style = {
    chip: {
        cursor: 'pointer',
        marginRight: '20px'
    }
}
