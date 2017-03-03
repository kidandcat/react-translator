import React, {Component} from 'react';
import Layout from 'Layout/Layout';
let style;

class Out extends Component {
    render() {
        return (
            <Layout breads={[
                {
                    text: 'Inicio',
                    href: '/'
                }, {
                    text: 'Usuarios',
                    active: true
                }
            ]}>
                Usuarios
            </Layout>
        );
    }
}

export default Out;

style = {
    buton: {
        transform: 'translateX(-50%)',
        marginLeft: '50%',
        marginTop: '300px'
    }
}
