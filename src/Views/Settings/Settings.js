import React, { Component } from 'react';
import Layout from 'Layout/Layout';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(isNumber(event.target.value) || event.target.value === '')
      this.setState({value: event.target.value});
    else
      alert('solo numeros');
  }

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Layout>
        <h3>{this.state.value}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
          <input type="submit" value="Submit" />
        </form>
      </Layout>
    )
  }
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


export default Settings;
