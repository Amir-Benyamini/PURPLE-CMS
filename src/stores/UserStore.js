import { observable, makeObservable, action } from "mobx";

class UserStore {
  constructor() {
    this.user = {};
    makeObservable(this, {
      user: observable,
      setUser: action,
      getUser: action,
    });
  }
  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}
export const userStore = new UserStore();
