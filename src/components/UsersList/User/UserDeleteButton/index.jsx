import React, { Component } from 'react';
import styles from './UserDeleteButton.module.css';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

class UserDeleteButton extends Component {
  handleDelete = (e) => {
    e.stopPropagation();
    this.props.filteredUsers(this.props.user.id);
  };

  render() {
    return (
      <Icon
        path={mdiDelete}
        size={1}
        onClick={this.handleDelete}
        className={styles.deleteIcon}
      />
    );
  }
}

export default UserDeleteButton;
