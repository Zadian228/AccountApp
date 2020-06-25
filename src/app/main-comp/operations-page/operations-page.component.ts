import {Component, OnDestroy, OnInit} from '@angular/core';
import {Accounts, Operations} from '../../shared/interfaces';
import {AccountsService} from '../../accounts/accounts.service';
import {Subject, Subscription} from 'rxjs';
import {OperationService} from '../../accounts/operation.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-operations-page',
  templateUrl: './operations-page.component.html',
  styleUrls: ['./operations-page.component.css']
})
export class OperationsPageComponent implements OnInit, OnDestroy {
  operationsForm: FormGroup;
  accounts: Accounts[];

  operationsIncome: Operations[];
  operationsExpense: Operations[];

  subscribe: Subscription;

  constructor(private accountsService: AccountsService, private operationsService: OperationService) { }

  ngOnInit() {

    this.subscribe = this.operationsService.operationsChanged.subscribe(() => {
      this.accounts = this.accountsService.getAccounts();
      this.operationsExpense = this.operationsService.getOperationsExpense();
      this.operationsIncome = this.operationsService.getOperationsIncome();
    });
    this.operationsForm = new FormGroup( {
      'name': new FormControl(null, Validators.required),
      'cash': new FormControl(null, Validators.required),
      'type': new FormControl(null, Validators.required),
      'account': new FormControl(null, Validators.required)
    });

    this.accounts = this.accountsService.getAccounts();
    this.operationsExpense = this.operationsService.getOperationsExpense();
    this.operationsIncome = this.operationsService.getOperationsIncome();

  }


  onSubmit() {
    const newObj = this.onChangeObjectStructure(this.operationsForm.value);
    if (this.operationsForm.get('type').value === 'income') {
      this.operationsService.addOperationsIncome(newObj);
      this.operationsIncome = this.operationsService.getOperationsIncome();
    } else if (this.operationsForm.get('type').value === 'out') {
      this.operationsService.addOperationsExpense(newObj);
      this.operationsExpense = this.operationsService.getOperationsExpense();
    }


  }

  onChangeObjectStructure(obj: any) {
      const name = obj.name;
      const cash = obj.cash;
      const accounts = obj.account.name;
      const imagePath = obj.account.imagePath;
      const data = {name, cash, accounts, imagePath};
      obj = data;
      return obj;
  }

  onDeleteOperationIncome(index: number) {
    this.operationsService.deleteOperationIncome(index);
  }

  onDeleteOperationExpense(index: number) {
    this.operationsService.deleteOperationExpense(index);
  }


  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
