import React, { Component } from 'react';
import User from './User';

const usersDB = [
  {
    id: 1,
    firstName: 'Mike',
    lastName: 'Leonov',
    tagline: 'some tagline',
    imgSrc:
      'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/black-widow-scarlett-johansson.jpg',
  },
  {
    id: 2,
    firstName: 'Hope',
    lastName: 'Harrison',
    tagline: 'flnvl2gksdsw',
    imgSrc:
      'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/cde4c9d0a997d6cb906965b64699bf80.jpg',
  },
  {
    id: 3,
    firstName: 'Harry',
    lastName: 'Potter',
    tagline: 'fdbsoprkgs3',
    imgSrc:
      'https://golos.ua/images/items/2019-01/19/NnW2W9VcR715Hxxo/img_top.jpg',
  },
  {
    id: 4,
    firstName: 'Vladimir',
    lastName: 'Vedmedev',
    tagline: 'fdslkjfjse4',
    imgSrc:
      'https://lh3.googleusercontent.com/proxy/-ykXvAWSV2Azk73ywozg_kAho5PzLK7c_x2X1M1B0SQctkLVTOaGuymIi1LuRz6YnaATIG_vboRFFW69Uqhc5qXy0NTvlEMQquJRWq-PB7xroY27Rw7HDwdmPY-1NGnyZavovkbTz0Ib4E7YVrA',
  },
];

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: usersDB,
    };
  }

  filterUsers = (filteredUser) => {
    this.setState({
      usersList: this.state.usersList.filter((currentUser) => currentUser !== filteredUser)
    });
  };

  renderUsers = () => {
    const { usersList } = this.state;
    return usersList.map((user) => <User key={user.id} user={user} filteredUsers={this.filterUsers}/>);
  };

  render() {
    return <ul>{this.renderUsers()}</ul>;
  }
}

export default UserList;
