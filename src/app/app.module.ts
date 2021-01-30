import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { SideMenuComponent } from './components/layout/side-menu/side-menu.component';
import { LoginViewComponent } from './components/main/login-view/login-view.component';
import { AppViewComponent } from './components/main/app-view/app-view.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './ngrx/reducers/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AccountViewComponent } from './components/content/account/account-view/account-view.component';
import { AccountListComponent } from './components/content/account/account-list/account-list.component';
import { DashboardComponent } from './components/content/dashboard/dashboard.component';
import { AccountFormComponent } from './components/content/account/account-form/account-form.component';
import { AccountCardComponent } from './components/content/account/account-card/account-card.component';
import { AccountCreditCardsFormComponent } from './components/content/account/account-credit-cards-form/account-credit-cards-form.component';
import { TransactionViewComponent } from './components/content/transaction/transaction-view/transaction-view.component';
import { TransactionListComponent } from './components/content/transaction/transaction-list/transaction-list.component';
import { TransactionFormComponent } from './components/content/transaction/transaction-form/transaction-form.component';
import { UserViewComponent } from './components/content/user/user-view/user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    LoginViewComponent,
    AppViewComponent,
    LoginFormComponent,
    RegisterFormComponent,
    EnumToArrayPipe,
    AccountViewComponent,
    AccountListComponent,
    DashboardComponent,
    AccountFormComponent,
    AccountCardComponent,
    AccountCreditCardsFormComponent,
    TransactionViewComponent,
    TransactionListComponent,
    TransactionFormComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(appReducer, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
