import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import {ManagementdevelopmentComponent} from "./components/managementdevelopment/managementdevelopment.component";
import {ConsultantdevelopmentComponent} from "./components/consultantdevelopment/consultantdevelopment.component";
import {InterpersonalskillsComponent} from "./components/interpersonalskills/interpersonalskills.component";
import {MicrosoftskillsComponent} from "./components/microsoftskills/microsoftskills.component";
import {LearningresourcesComponent} from "./components/learningresources/learningresources.component";
import {MicrosoftskillsEnrollComponent} from "./components/microsoftskills/microsoftskills-component/microsoftskills-enroll/microsoftskills-enroll.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path:"",
    redirectTo:"/login",  // Redirect the root path to the login page
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"/home", pathMatch:"full"},
      {path:"home", component:DashboardComponent},
      {path:"management-development", component:ManagementdevelopmentComponent},
      {path:"consultant-development", component:ConsultantdevelopmentComponent},
      {path:"interpersonal-skills", component:InterpersonalskillsComponent},
      {path:"microsoft-office-skills", component:MicrosoftskillsComponent},
      {path:"learning-resources", component:LearningresourcesComponent},
      {path:"microsoft-office-skills-enroll", component:MicrosoftskillsEnrollComponent},
    ]
  },
  {path:"**", redirectTo:"/home", pathMatch:"full"},  // Redirect any unmatched paths to the home page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
