import React, {Component} from 'react';
import {Image} from 'react-router';
import Layout from 'Layout/Layout';
let kid = require('kid.png');

class NotFound extends Component {
    render() {
        return (
            <Layout>
                <img src={kid}></img>
            </Layout>
        );
    }
}

export default NotFound;
