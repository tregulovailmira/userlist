import React, { Component } from 'react';
import UserFullName from './UserFullName';
import UserPhoto from './UserPhoto';
import UserTagline from './UserTagline';

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <li>
        <UserFullName user={user} />
        <UserPhoto user={user} />
        <UserTagline user={user} />
      </li>
    );
  }
}

export default User;
