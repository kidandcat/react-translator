import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import {grey400} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
let icon = require('github.svg');
let style;

class One extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        window.open('http://github.com/kidandcat', '_blank');
    }

    render() {
        return (
            <Chip backgroundColor={grey400} style={style.chip} onClick={this.handleClick}>
                <Avatar src={icon}/>
                github
            </Chip>
        )
    }
}

export default One;

style = {
    chip: {
        cursor: 'pointer'
    }
}
