import React, { Component } from 'react';

class UserFullName extends Component {
  getFullName = () => {
    const { firstName, lastName } = this.props.user;
    return `${firstName} ${lastName}`;
  };

  render() {
    return <div>{this.getFullName()}</div>;
  }
}

export default UserFullName;
