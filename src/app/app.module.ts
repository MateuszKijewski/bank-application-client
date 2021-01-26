import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    LoginViewComponent,
    AppViewComponent,
    LoginFormComponent,
    RegisterFormComponent,
    EnumToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
