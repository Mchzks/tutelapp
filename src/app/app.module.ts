import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/login/registration/registration.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { FundamentalRightsComponent } from './components/dashboard/fundamental-rights/fundamental-rights.component';
import { PetitionRightComponent } from './components/dashboard/petition-right/petition-right.component';
import { TutelageActionComponent } from './components/dashboard/tutelage-action/tutelage-action.component';
import { TermsConditionsComponent } from './components/login/terms-conditions/terms-conditions.component';
import { FundamentalRightsDefinitionComponent } from './components/modals/fundamental-rights-definition/fundamental-rights-definition.component';
import { PoliticalConstitutionComponent } from './components/modals/political-constitution/political-constitution.component';
import { FundamentalRightsVulnerationsComponent } from './components/modals/fundamental-rights-vulnerations/fundamental-rights-vulnerations.component';
import { PetitionRightsDefinitionComponent } from './components/modals/petition-rights-definition/petition-rights-definition.component';
import { PetitionRightsProtectionsComponent } from './components/modals/petition-rights-protections/petition-rights-protections.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    FundamentalRightsComponent,
    PetitionRightComponent,
    TutelageActionComponent,
    TermsConditionsComponent,
    FundamentalRightsDefinitionComponent,
    PoliticalConstitutionComponent,
    FundamentalRightsVulnerationsComponent,
    PetitionRightsDefinitionComponent,
    PetitionRightsProtectionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
