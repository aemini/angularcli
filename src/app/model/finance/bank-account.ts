import {Bank} from "./bank";
import {Currency} from "./currency";

export class BankAccount {
  id: number;
  bank: Bank;
  name: string;
  iban: string;
  accountNumber: number;
  balance: number;
  accountType: string;
  currency: Currency;
  isActive: boolean;
}
