import {Component, OnDestroy, OnInit} from '@angular/core';
import {BalanceService} from '../../accounts/balance.service';
import {Accounts, Operations, Overview} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {OperationService} from '../../accounts/operation.service';
import {AccountsService} from '../../accounts/accounts.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit, OnDestroy{
  overview: Overview[];
  subscribe: Subscription;
  accounts: Accounts[];
  operationsIncome: Operations[];
  operationsExpense: Operations[];


  public initialValue = 0;
  public allBalancePage = 0;


  constructor(private balanceService: BalanceService, private operationsService: OperationService, private accountsService: AccountsService) { }



  ngOnInit() {
    this.subscribe = this.balanceService.overviewChanged.subscribe(() => {
      this.overview = this.balanceService.getOverview();
      this.operationsExpense = this.operationsService.getOperationsExpense();
      this.operationsIncome = this.operationsService.getOperationsIncome();
    });
    const inc = this.operationsService.operationsIncome;
    const exp = this.operationsService.operationsExpense;
    this.overview = this.balanceService.getOverview();
    this.operationsExpense = this.operationsService.getOperationsExpense();
    this.operationsIncome = this.operationsService.getOperationsIncome();
    this.getAllIncome(inc);
    this.getAllExpense(exp);
    this.getAllBalance(this.getAllIncome(inc), this.getAllExpense(exp));


  }


  getAllIncome(inc: any) {
    inc = this.operationsService.operationsIncome.reduce(
      (accumulator, currentValue) => accumulator + currentValue.cash,
      this.initialValue
    );
    return inc;
  }

  getAllExpense(exp: any) {
   exp = this.operationsService.operationsExpense.reduce(
      (accumulator, currentValue) => accumulator + currentValue.cash,
      this.initialValue
    );
   return exp;
  }

  getAllBalance(inc: any, exp: any) {
    this.allBalancePage = inc - exp;
    for (const key of Object.keys(this.overview)) {
      this.balanceService.overview[key].balance = this.allBalancePage;
      this.balanceService.overview[key].income = inc;
      this.balanceService.overview[key].expense = exp;
      return this.allBalancePage;
    }

  }


  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
