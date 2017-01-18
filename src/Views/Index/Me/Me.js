import React, {Component} from 'react';
import Avatar from 'Index/Me/Avatar';
import Name from 'Index/Me/Name';

class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        alert('clicked');
        event.preventDefault();
    }

    render() {
        return (
            <div style={style.me}>
                <Name/>
                <Avatar/>
            </div>
        )
    }
}

export default Me;

const style = {
    me: {
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        marginTop: '80px',
        width: '100%'
    }
}
