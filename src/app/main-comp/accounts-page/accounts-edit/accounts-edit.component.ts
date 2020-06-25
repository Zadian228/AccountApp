import { Component, OnInit } from '@angular/core';
import {AccountsService} from '../../../accounts/accounts.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-accounts-edit',
  templateUrl: './accounts-edit.component.html',
  styleUrls: ['./accounts-edit.component.css']
})
export class AccountsEditComponent implements OnInit {
  accountsForm: FormGroup;
  CardAndWallets = [(this.accountsService.Card), (this.accountsService.Wallet)]

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'cash': new FormControl(0, Validators.required),
      'imagePath': new FormControl(null, Validators.required),

    })
  }



  onSubmit() {
    this.accountsService.addAccount(this.accountsForm.value);
  }

}


