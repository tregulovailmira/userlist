import React, { Component } from 'react';

class UserPhoto extends Component {
  render() {
    const { imgSrc } = this.props.user;
    return (
      <div>
        <img src={imgSrc} alt="user photo" />
      </div>
    );
  }
}

export default UserPhoto;
