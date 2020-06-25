import {Injectable} from '@angular/core';
import {Accounts, Operations} from '../shared/interfaces';
import {AccountsService} from './accounts.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OperationService {
  operations: Operations[];
  accounts: Accounts[];
  operationsChanged = new Subject<Operations[]>();

  constructor(private accountsService: AccountsService) {
  }

  public operationsIncome: Operations[] = [
    {name: 'Зарплата', cash: 30000, accounts: this.accountsService.accounts[1].name, imagePath: this.accountsService.Wallet},
    {name: 'Фриланс', cash: 7000, accounts: this.accountsService.accounts[0].name, imagePath: this.accountsService.Card}
  ];

  public operationsExpense: Operations[] = [
    {name: 'Магазин', cash: 1700, accounts: this.accountsService.accounts[1].name, imagePath: this.accountsService.Wallet},
    {name: 'Корм собаке', cash: 500, accounts: this.accountsService.accounts[0].name,  imagePath: this.accountsService.Card},
    {name: 'Набор лего', cash: 4000, accounts: this.accountsService.accounts[0].name,  imagePath: this.accountsService.Card}
  ];




  getOperationsIncome() {
    return this.operationsIncome.slice();
  }

  addOperationsIncome(operationsIncome: Operations) {
    this.operationsIncome.push(operationsIncome);
  }

  addOperationsExpense(operationsExpense: Operations) {
    this.operationsExpense.push(operationsExpense);
  }

  deleteOperationIncome(index: number) {
    this.operationsIncome.splice(index, 1);
    this.operationsChanged.next(this.operationsIncome.slice());
  }

  deleteOperationExpense(index: number) {
    this.operationsExpense.splice(index, 1);
    this.operationsChanged.next(this.operationsExpense.slice());
  }


  getOperationsExpense() {
    return this.operationsExpense.slice();
  }

}
