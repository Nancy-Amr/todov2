import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './shared/material-ui//material-ui.module';
import { UserTableComponent } from './core/user-table/user-table.component';
import {  HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './core/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoComponent } from './core/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserTableComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialUiModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
