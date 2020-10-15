import React, { Component } from 'react';
import styles from './UserPhoto.module.css';
import classNames from 'classnames/bind';

const userClasses = classNames.bind(styles);

class UserPhoto extends Component {
  render() {
    const { imgSrc } = this.props.user;
    const { className } = this.props;
    return (
      <img
        src={imgSrc}
        alt="user photo"
        className={userClasses('userPhoto', className)}
      />
    );
  }
}

export default UserPhoto;
