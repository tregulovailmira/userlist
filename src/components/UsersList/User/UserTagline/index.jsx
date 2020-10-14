import React, { Component } from 'react';

class UserTagline extends Component {
  render() {
    const { tagline } = this.props.user;
    return <div>{tagline}</div>;
  }
}

export default UserTagline;
