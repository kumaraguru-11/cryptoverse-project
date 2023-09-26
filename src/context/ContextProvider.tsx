import React, { createContext,  useState,ReactNode } from "react";
import { Coin } from "../app/react-ts-env";

type ContextValue = {
  sortedData: Coin[] | null; // Replace 'Coin[]' with the correct type
  setSortedData: React.Dispatch<React.SetStateAction<Coin[] | null>>; // Replace 'Coin[]' with the correct type
};

const defaultContextValue: ContextValue = {
  sortedData: null,
  setSortedData: () => {},
};

type WrapperProps = {
  children: ReactNode;
};

export const userContext = createContext<ContextValue>(defaultContextValue);

const ContextProvider: React.FC<WrapperProps> = ({ children }) => {
  const [sortedData, setSortedData] = useState<Coin[] | null>(null); // Replace 'Coin[]' with the correct type

  const contextValue: ContextValue = {
    sortedData,
    setSortedData,
  };

  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
};

export default ContextProvider;
