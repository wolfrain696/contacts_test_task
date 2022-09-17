import { makeAutoObservable } from 'mobx';

import { TUser } from 'types/user';

import { getUser, postUser } from '../api/LogIn';

class User {
  isLogIn = false;
  userName = '';

  userData?: TUser;

  constructor() {
    makeAutoObservable(this);
  }

  changeUserName = (value: string) => {
    this.userName = value;
  };

  logIn = async (userName: string) => {
    try {
      this.isLogIn = true;
      const { data } = await getUser(userName);
      if (!data.length) {
        const newUser = { id: Date.now(), name: userName, contacts: [] };
        const addedUser = await postUser(newUser);
        this.userData = addedUser.data;
      } else {
        this.userData = data;
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default new User();
