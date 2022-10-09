import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { FundamentalRightsComponent } from './components/dashboard/fundamental-rights/fundamental-rights.component';
import { PetitionRightComponent } from './components/dashboard/petition-right/petition-right.component';
import { TutelageActionComponent } from './components/dashboard/tutelage-action/tutelage-action.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegistrationComponent } from './components/login/registration/registration.component';
import { TermsConditionsComponent } from './components/login/terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "fundamental-rights", component: FundamentalRightsComponent },
  { path: "petition-right", component: PetitionRightComponent },
  { path: "tutelage-action", component: TutelageActionComponent },
  { path: "terms-conditions", component: TermsConditionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
