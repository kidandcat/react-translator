import React, {Component} from 'react';
import Layout from 'Layout/Layout';
import t from 'translator';
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
                {t('Users')}
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
