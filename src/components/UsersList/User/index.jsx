import React, { Component } from 'react';
import UserFullName from './UserFullName';
import UserPhoto from './UserPhoto';
import UserTagline from './UserTagline';
import styles from './User.module.css';
import classNames from 'classnames/bind';

const userClasses = classNames.bind(styles);

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
    const { isSelected } = this.state;
    const className = userClasses('userContainer', {
      selectedUser: isSelected,
      hover: !isSelected,
    });
    return (
      <li onClick={this.handleSelect} className={className}>
        <UserPhoto
          user={user}
          className={userClasses({
            selectedUserPhoto: isSelected,
          })}
        />
        <div>
          <UserFullName
            user={user}
            className={userClasses({
              selectedUserFullName: isSelected,
            })}
          />
          <UserTagline
            user={user}
            className={userClasses({
              selectedUserTagline: isSelected,
            })}
          />
        </div>
      </li>
    );
  }
}

export default User;
