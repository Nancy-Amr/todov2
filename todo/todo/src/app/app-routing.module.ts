import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './core/user-table/user-table.component';
import { LoginComponent } from './core/login/login.component';
import { TodoComponent } from './core/todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component:UserTableComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'todo',
    component:TodoComponent
  },
  {
    path:'user-table',
    component:UserTableComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


