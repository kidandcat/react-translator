import React, {Component} from 'react';
import Chip from 'Index/Me/Chips/Chip';

class One extends Component {
    render() {
        return (
              <Chip icon={require('linkin.png')} link="https://es.linkedin.com/in/jairo-caro-accino-viciana-b2991458">
                LinkedIn
              </Chip>
        )
    }
}

export default One;
