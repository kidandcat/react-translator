import React, {Component} from 'react';
import Chip from 'Index/Me/Chips/Chip';

class One extends Component {
    render() {
        return (
              <Chip icon={require('stack.svg')} id="stackoverflow" link="https://stackoverflow.com/users/4158710/jairo">
                StackOverflow
              </Chip>
        )
    }
}

export default One;
