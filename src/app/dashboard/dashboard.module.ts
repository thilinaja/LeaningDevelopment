import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnModule } from '../learn-module'
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {CardsComponent} from "./dashboard-components/cards/cards.component";





@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    LearnModule,
    FormsModule,  MatSlideToggleModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
