import React, { Component } from 'react';
import styles from './UserFullName.module.css';
import classNames from 'classnames/bind';

const userClasses = classNames.bind(styles);

class UserFullName extends Component {
  getFullName = () => {
    const { firstName, lastName } = this.props.user;
    return `${firstName} ${lastName}`;
  };

  render() {
    const { className } = this.props;
    return (
      <div className={userClasses('userFullName', className)}>
        {this.getFullName()}
      </div>
    );
  }
}

export default UserFullName;
