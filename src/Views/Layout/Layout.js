import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
let style;

class Lay extends Component {
    constructor() {
      super();
      let self = this;
      window.onresize = () => {
        alert('rerender');
        self.forceUpdate();
      }
    }

    render() {
        return (
            <div style={style.nav}>
                <Layout>
                    <Header title="Jairo Caro-Accino Viciana" />
                    <Drawer title="Menu">
                        <Navigation>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Navigation>
                    </Drawer>
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
