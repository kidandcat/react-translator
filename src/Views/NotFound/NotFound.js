import React, { Component } from 'react';
import { Link } from 'react-router';
import Layout from 'Layout/Layout';

class NotFound extends Component {
  render() {
    return (
      <Layout>
        <div className="NotFound">
          <div className="NotFound-header">
            <h2>Not found</h2>
          </div>
          <Link to="/Settings">Administración</Link>
        </div>
      </Layout>
    );
  }
}

export default NotFound;
