import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SettingsComponent} from './settings/settings.component';
import {AccountsPageComponent} from './main-comp/accounts-page/accounts-page.component';
import {OperationsPageComponent} from './main-comp/operations-page/operations-page.component';
import {OverviewPageComponent} from './main-comp/overview-page/overview-page.component';
import {CategoriesPageComponent} from './main-comp/categories-page/categories-page.component';
import {AccountsEditComponent} from './main-comp/accounts-page/accounts-edit/accounts-edit.component';
import {AccountsDetailComponent} from './main-comp/accounts-page/accounts-detail/accounts-detail.component';
import {AuthGuard} from './accounts/auth.guard';


const routes: Routes = [
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'accounts', component: AccountsPageComponent,
        canActivate: [AuthGuard],
        children: [
          {path: 'new', component: AccountsEditComponent},
          { path: ':id', component: AccountsDetailComponent},
          { path: ':id/edit', component: AccountsEditComponent}
        ]},
      {path: 'categories', component: CategoriesPageComponent},
      {path: 'operations', component: OperationsPageComponent, canActivate: [AuthGuard]},
      {path: 'overview', component: OverviewPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
