import { createContext, useContext } from "react";

export enum Currency {
  IDR = "IDR",
  USD = "USD",
  CAD = "CAD",
  SGD = "SGD",
}

export type CurrencyContextType = {
  currency: Currency;
  setCurrency: (Currency: Currency) => void;
}

// inside create context is default value
export const CurrencyContext = createContext<CurrencyContextType>({
  currency: Currency.IDR,
  setCurrency: () => {}
})
export const useCurrency = () => useContext(CurrencyContext);