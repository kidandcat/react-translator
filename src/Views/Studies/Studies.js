import React, {Component} from 'react';
import Layout from 'Layout/Layout';
import {Button} from 'react-mdl';
let style;

class Index extends Component {
    constructor() {
        super();
        this.index = this.index.bind(this);
    }

    index() {
        if (window.location.pathname === '/studies') {
            window.navigate('/', 'left');
        } else {
            window.navigate('/', 'right');
        }
    }

    render() {
        return (
            <Layout>
                <Button onClick={this.index} style={style.buton} raised colored>Back</Button>
            </Layout>
        );
    }
}

export default Index;

style = {
  buton: {
    transform: 'translateX(-50%)',
    marginLeft: '50%',
    marginTop: '300px'
  }
}
