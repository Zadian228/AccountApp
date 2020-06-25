import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountsService} from '../../accounts/accounts.service';
import {Accounts} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {OperationService} from '../../accounts/operation.service';
import * as _ from 'underscore';


@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts-page.component.html',
  styleUrls: ['./accounts-page.component.css']
})
export class AccountsPageComponent implements OnInit, OnDestroy {
  accounts: Accounts[];

 subscribe: Subscription;





  constructor(private accountsService: AccountsService, private operationsService: OperationService) { }



  cashes = {};






  ngOnInit() {
    this.subscribe = this.accountsService.accountsChanged.subscribe(() => {
      this.accounts = this.accountsService.getAccounts();

    });
    this.accounts = this.accountsService.getAccounts();
    const income =  _.groupBy(this.operationsService.operationsIncome, 'accounts' );
    const out = _.groupBy(this.operationsService.operationsExpense, 'accounts');
    this.sumCashes(income);
    this.sumCashes(out);
    Object.keys(income);
    Object.keys(out);
    this.sumObjects(income, out);
    this.cashes = this.sumObjects(income, out);
    this.changeAccountsCash(this.cashes);
  }





  sumCashes(obj: any) {
    for (const key of Object.keys(obj)) {
      const sum = _.reduce(obj[key], (memo, item) => memo + item.cash, 0);
      const pic = _.pluck(obj[key], 'imagePath');
      const name = _.pluck(obj[key], 'accounts');
      const data = {sum, imagePath: pic[0], accounts: name[0]};

      obj[key] = data;
    }
  }

  sumObjects(income: any, out: any) {
    const arr = [];
    const arrKeys = Object.keys(income);
    for (const key of Object.keys(out)) {
      if (arrKeys.indexOf(key) === -1) {
        arrKeys.push(key);
      }
    }
    arrKeys.forEach(key => {
      const incomeSum = income[key] ? income[key].sum : 0;
      const outSum = out[key] ? out[key].sum : 0;
      arr.push({
        name: key,
        sum: incomeSum - outSum,
      });
    });
    if (arr.length === 0) {
      this.changeAccountsCash(0);
    }
    arr.reverse();
    return arr;
  }
  changeAccountsCash(cashes: any) {
    if (cashes === 0) {
      for (const key of Object.keys(this.accounts)) {
        this.accounts[key].cash = 0;
      }
    } else {
      for (const key of Object.keys(cashes)) {
        if (cashes[key].name === this.accounts[key].name) {
          this.accounts[key].cash = cashes[key].sum;
        }
      }
      return this.accounts;
    }
  }



  onDeleteAccount(index: number)  {
    this.accountsService.deleteAccount(index);
}


  ngOnDestroy() {
   this.subscribe.unsubscribe();
  }

}
