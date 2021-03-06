import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from './components/main/login-view/login-view.component';
import { AppViewComponent } from './components/main/app-view/app-view.component';
import { AccountViewComponent } from './components/content/account/account-view/account-view.component';
import { DashboardComponent } from './components/content/dashboard/dashboard.component';
import { NotfoundViewComponent } from './components/main/notfound-view/notfound-view.component';
import { TransactionViewComponent } from './components/content/transaction/transaction-view/transaction-view.component';
import { UserViewComponent } from './components/content/user/user-view/user-view.component';

// export const routes: Routes = [
//   { path: '', component: AppViewComponent },
//   { path: 'login', component: LoginViewComponent },
//   { path: 'account', component: AccountViewComponent }
// ];

const appRoutes: Routes = [
    
  //Site routes goes here 
  { 
      path: '', 
      component: AppViewComponent,
      children: [
        { path: '', component: UserViewComponent, pathMatch: 'full'},
        { path: 'account', component: AccountViewComponent },
        { path: 'transaction', component: TransactionViewComponent }
      ]
  },

  //no layout routes
  { path: 'login', component: LoginViewComponent},
  // otherwise redirect to home
  { path: '**', component: NotfoundViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor() { }
}