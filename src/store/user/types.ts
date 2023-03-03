export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserSignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePhoto: string;
}

export interface IUserLogIn {
  email: string;
  password: string;
}
