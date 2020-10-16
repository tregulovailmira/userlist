import React, { Component } from 'react';
import User from './User';

const usersDB = [
  {
    id: 1,
    firstName: 'Black',
    lastName: 'Widow',
    tagline: 'spy, superhero',
    imgSrc:
      'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/black-widow-scarlett-johansson.jpg',
  },
  {
    id: 2,
    firstName: 'Wonder',
    lastName: 'Women',
    tagline: 'Princess Diana from Themyscira',
    imgSrc:
      'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/cde4c9d0a997d6cb906965b64699bf80.jpg',
  },
  {
    id: 3,
    firstName: 'Iron',
    lastName: 'Man',
    tagline: 'genius, billionaire, playboy, philanthropist',
    imgSrc:
      'https://golos.ua/images/items/2019-01/19/NnW2W9VcR715Hxxo/img_top.jpg',
  },
  {
    id: 4,
    firstName: 'Captain',
    lastName: 'America',
    tagline: 'super soldier',
    imgSrc:
      'https://topspiski.com/wp-content/uploads/2018/02/72f8778216155481bd799c5120a894d9-700x438.jpg',
  },
];

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: usersDB,
    };
  }

  filterUsers = (filteredUserID) => {
    this.setState({
      usersList: this.state.usersList.filter(({ id }) => id !== filteredUserID),
    });
  };

  renderUsers = () => {
    const { usersList } = this.state;
    return usersList.map((user) => (
      <User key={user.id} user={user} filteredUsers={this.filterUsers} />
    ));
  };

  render() {
    return <ul>{this.renderUsers()}</ul>;
  }
}

export default UserList;
