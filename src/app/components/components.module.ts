import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { ManagementdevelopmentComponent } from './managementdevelopment/managementdevelopment.component';
import { ConsultantdevelopmentComponent } from './consultantdevelopment/consultantdevelopment.component';
import { InterpersonalskillsComponent } from './interpersonalskills/interpersonalskills.component';
import { MicrosoftskillsComponent } from './microsoftskills/microsoftskills.component';
import { LearningresourcesComponent } from './learningresources/learningresources.component';
import {LearnModule} from "../learn-module";
import {FormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import { ManagementdevelopmentCardComponent } from './managementdevelopment/managementdevelopment-component/managementdevelopment-card/managementdevelopment-card.component';
import { ConsultantdevelopmentCardComponent } from './consultantdevelopment/consultantdevelopment-component/consultantdevelopment-card/consultantdevelopment-card.component';
import { InterpersonalskillsCardComponent } from './interpersonalskills/interpersonalskills-component/interpersonalskills-card/interpersonalskills-card.component';
import { MicrosoftskillsCardComponent } from './microsoftskills/microsoftskills-component/microsoftskills-card/microsoftskills-card.component';
import { LearningresourcesCardComponent } from './learningresources/learningresources-component/learningresources-card/learningresources-card.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EnrollComponent } from './enroll/enroll.component';
import { MicrosoftskillsEnrollComponent } from './microsoftskills/microsoftskills-component/microsoftskills-enroll/microsoftskills-enroll.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ManagementdevelopmentComponent,
    ConsultantdevelopmentComponent,
    InterpersonalskillsComponent,
    MicrosoftskillsComponent,
    LearningresourcesComponent,
    ManagementdevelopmentCardComponent,
    ConsultantdevelopmentCardComponent,
    InterpersonalskillsCardComponent,
    MicrosoftskillsCardComponent,
    LearningresourcesCardComponent,
    EnrollComponent,
    MicrosoftskillsEnrollComponent,
    LoginComponent,


  ],
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    LearnModule,
    FormsModule,  MatSlideToggleModule,
    MatButtonToggleModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MatGridListModule
  ],
  exports: [
    ManagementdevelopmentComponent,
    ConsultantdevelopmentComponent,
    InterpersonalskillsComponent,
    MicrosoftskillsComponent,
    LearningresourcesComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ComponentsModule { }
