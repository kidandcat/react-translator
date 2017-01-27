import React, {Component} from 'react';
import {Layout, Header, Content} from 'react-mdl';
let style;

class Lay extends Component {
    render() {
        return (
            <div style={style.nav}>
                <Layout>
                    <Header title=""/>
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default Lay;

style = {
    nav: {
        height: '100%'
    }
}
