export type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  ForgotPassword: undefined;
  Main: { username: string };
  Profile: { username: string };
  History: undefined;
};

export type usertype = {
  Login: string;
  SetLogin: Function;
};

export type TransactionType = "income" | "expense";

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  date: string;
}
