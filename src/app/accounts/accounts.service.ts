import { Injectable } from '@angular/core';
import {Accounts, Operations, Overview} from '../shared/interfaces';
import {Subject} from 'rxjs';
import {OperationService} from './operation.service';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accountsChanged = new Subject<Accounts[]>();


 public Card = 'http://vkarasenko.ru/wp-content/uploads/bank-karta-maket-400x282.png';
 public Wallet = 'http://pngimg.com/uploads/wallet/wallet_PNG7511.png';

  constructor() { }

  public accounts: Accounts[] = [
     {name: 'Карта1', cash: 0, imagePath: this.Card, type: 'out'},
    {name: 'Наличные2', cash: 0, imagePath: this.Wallet, type: 'income'}
  ];
  // public accountsFilter = this.operationsService.operationsExpense.filter(operationsExpense => operationsExpense[name] === this.accounts[name]);

  getAccounts() {
    return this.accounts.slice();
  }



  deleteAccount(index: number) {
    this.accounts.splice(index, 1);
    this.accountsChanged.next(this.accounts.slice());
  }

  addAccount(accounts: Accounts) {
    this.accounts.push(accounts);
    this.accountsChanged.next(this.accounts.slice());

  }



}
