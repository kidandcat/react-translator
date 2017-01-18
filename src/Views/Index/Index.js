import React, {Component} from 'react';
import {Image} from 'react-router';
import Layout from 'Index/Layout';
let kid = require('kid.png');

class Index extends Component {
    render() {
        return (
            <Layout>
                <img src={kid}></img>
            </Layout>
        );
    }
}

export default Index;
