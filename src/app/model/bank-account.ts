import {Bank} from "./bank";

export class BankAccount {
  id: number;
  bank: Bank;
  name: string;
  iban: string;
  accountNumber: number;
  balance: number;
  accountType: string;
  isActive: boolean;
}
