import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from './components/main/login-view/login-view.component';
import { AppViewComponent } from './components/main/app-view/app-view.component';

export const routes: Routes = [
  { path: '', component: AppViewComponent },
  { path: 'login', component: LoginViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor() { }
}