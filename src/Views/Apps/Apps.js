import React, {Component} from 'react';

import Layout from 'Layout/Layout';

class Index extends Component {
    render() {
        return (
            <Layout breads={[
                {
                    text: 'Inicio',
                    href: '/'
                }, {
                    text: 'Aplicaciones',
                    active: true
                }
            ]}>
                Applicacionesss
            </Layout>
        );
    }
}

export default Index;
