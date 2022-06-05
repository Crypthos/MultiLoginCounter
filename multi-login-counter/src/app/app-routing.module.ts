import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./auth/signup/signup.component";
import {LoginComponent} from "./auth/login/login.component";
import {UserDashboardComponent} from "./shared/component/user-dashboard/user-dashboard.component";
import {AdminDashboardComponent} from "./shared/component/admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: '' ,  component: LoginComponent},
  {path: 'user', component: UserDashboardComponent},
  {path: 'admin', component: AdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
