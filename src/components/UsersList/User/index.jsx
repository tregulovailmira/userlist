import React, { Component } from 'react';
import UserFullName from './UserFullName';
import UserPhoto from './UserPhoto';
import UserTagline from './UserTagline';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  handleSelect = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  };

  render() {
    const { user } = this.props;
    return (
      <li onClick={this.handleSelect}>
        <UserFullName user={user} />
        <UserPhoto user={user} />
        <UserTagline user={user} />
      </li>
    );
  }
}

export default User;
