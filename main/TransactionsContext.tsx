import React, { createContext, useContext, useState, ReactNode } from "react";
import { Transaction } from "./types";

interface TransactionsContextProps {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
}

export const TransactionsContext = createContext<
  TransactionsContextProps | undefined
>(undefined);

interface TransactionsProviderProps {
  children: ReactNode; // Определяем проп `children` как `ReactNode`
}

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
