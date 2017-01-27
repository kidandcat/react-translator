import React, {Component} from 'react';
import Layout from 'Layout/Layout';
import Me from 'Index/Me/Me';
import Content from 'Index/Content/Content';

class Index extends Component {
    render() {
        return (
            <Layout>
                <Me/>
                <Content/>
            </Layout>
        );
    }
}

export default Index;
