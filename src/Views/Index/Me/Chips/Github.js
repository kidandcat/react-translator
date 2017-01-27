import React, {Component} from 'react';
import Chip from 'Index/Me/Chips/Chip';


class One extends Component {
    render() {
        return (
            <Chip icon={require('github.svg')} id="github" link="https://github.com/kidandcat">
                Github
            </Chip>
        )
    }
}

export default One;
