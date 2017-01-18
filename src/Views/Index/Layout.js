import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

class Layout extends Component {

    render() {
        return (
            <div className="Layout">
                <AppBar title="" /> {this.props.children}
            </div>
        );
    }
}

export default Layout;
