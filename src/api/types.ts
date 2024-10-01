export interface IFriend {
  id: number;
  name: string;
}

export interface IUser {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  tags: string[];
  friends: IFriend[];
  favoriteFruit: string;
}
