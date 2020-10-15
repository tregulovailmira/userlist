import React, { Component } from 'react';
import styles from './UserTagline.module.css';
import classNames from 'classnames/bind';

const userClasses = classNames.bind(styles);

class UserTagline extends Component {
  render() {
    const { tagline } = this.props.user;
    const { className } = this.props;
    return <div className={userClasses('tagline', className)}>{tagline}</div>;
  }
}

export default UserTagline;
