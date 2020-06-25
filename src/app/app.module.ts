import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsPageComponent } from './main-comp/accounts-page/accounts-page.component';
import { CategoriesPageComponent } from './main-comp/categories-page/categories-page.component';
import { OperationsPageComponent } from './main-comp/operations-page/operations-page.component';
import { OverviewPageComponent } from './main-comp/overview-page/overview-page.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccountsService} from './accounts/accounts.service';
import {BalanceService} from './accounts/balance.service';
import { AccountsEditComponent } from './main-comp/accounts-page/accounts-edit/accounts-edit.component';
import { AccountsDetailComponent } from './main-comp/accounts-page/accounts-detail/accounts-detail.component';
import {Card} from './shared/card.pipe';
import {Wallet} from './shared/Wallet.pipe';
import {OperationService} from './accounts/operation.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AccountsPageComponent,
    CategoriesPageComponent,
    OperationsPageComponent,
    OverviewPageComponent,
    HeaderComponent,
    LoginComponent,
    SettingsComponent,
    HomeComponent,
    AccountsEditComponent,
    AccountsDetailComponent,
    Card,
    Wallet,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AccountsService, BalanceService, OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
