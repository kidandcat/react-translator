import React, {Component} from 'react';
import Layout from 'Layout/Layout';
import t from 'translator';

class Index extends Component {
    render() {
        return (
            <Layout breads={[{
                    text: 'Inicio',
                    active: true
                }
            ]}>
              {t('Welcome to Indigitall 2.0')}
            </Layout>
        );
    }
}

export default Index;
