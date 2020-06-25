export interface User {
  email: string;
  password: string;
}

export interface Overview {
  balance: {};
  income: {};
  expense: {};

}

export interface Operations {
  name: string;
  cash: number;
  accounts: {};
  imagePath: string;
}



export interface Accounts {
  name: string;
  cash: number;
  imagePath: string;
  type: 'income' | 'out';
}

