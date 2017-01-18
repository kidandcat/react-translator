import React, {Component} from 'react';
import Avatar from 'Index/Me/Avatar';
import Name from 'Index/Me/Name';
import Social from 'Index/Me/Social';
let style;

class Me extends Component {
    render() {
        return (
            <div style={style.me}>
                <Avatar/>
                <Name/>
                <Social/>
            </div>
        )
    }
}

export default Me;

style = {
    me: {
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        marginTop: '80px',
        width: '100%'
    }
}
