import { makeAutoObservable } from 'mobx';
import Service, { UserType } from '../service/service';

function filterByText(user: UserType, searchedValue: string) {
  const fieldToSort = Object.keys(user);
  const arr = fieldToSort.map((field) => {
    if (field !== 'id') { return user[field]; } return undefined;
  }).filter(Boolean);
  return arr.some((field) => field!.toString()?.toLocaleLowerCase()
    .replace(/ё/g, 'е').includes(searchedValue.toLocaleLowerCase().replace(/ё/g, 'е')));
}

class UserData {
  user!: (UserType | undefined)[];

  data: UserType[];

  info: boolean;

  userInfo: UserType | undefined;

  isLoad: boolean;

  constructor() {
    makeAutoObservable(this);
    this.data = [];
    this.info = false;
    this.isLoad = true;
  }

  userSet = (item: (UserType | undefined)[]) => {
    this.user = item;
  };

  closeModal = () => {
    this.info = false;
    this.userInfo = undefined;
  };

  getUserInfo = (item: UserType) => {
    this.userInfo = item;
    this.info = true;
  }

  getLog() {
    setTimeout(() => {
      const arr = Service.data.map((user) => {
        if (filterByText(user, Service.search)) {
          return user;
        }
        return undefined;
      }).filter(Boolean);
      this.userSet(arr);
      this.isLoad = false;
    }, 800);
  }

  getUsers = () => {
    Service.getData().then((res) => res);
    this.getLog();
  };

  setSearch = (value: string) => {
    Service.search = value;
  }
}

export default new UserData();
