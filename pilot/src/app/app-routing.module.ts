import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component'
import { AddUserComponent} from './add-user/add-user.component'

const routes: Routes = [
  { path: 'users', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addUser', component: AddUserComponent },
  {path : '', redirectTo: "/login",pathMatch: 'full'}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
