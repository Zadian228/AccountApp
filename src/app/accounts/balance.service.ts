import {Injectable} from '@angular/core';
import {Accounts, Operations, Overview} from '../shared/interfaces';
import {OperationService} from './operation.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BalanceService {
  operations: Operations[];
  overviewChanged = new Subject<Overview[]>();

  constructor(private operationsService: OperationService) {
  }

  public allBalance;
  public allIncome;
  public allExpense;


  public overview: Overview[] = [
    {balance: this.allBalance, income: this.allIncome, expense: this.allExpense}
  ];

  getOverview() {
    return this.overview.slice();
  }

}
