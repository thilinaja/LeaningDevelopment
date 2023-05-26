import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
interface alerts {
  background: string;
  color: string;
  icon: string;
  iconColor: string;
  message: string;
}

interface desc {
  background: string,
  color: string,
  icon: string,
  iconColor: string,
  heading: string,
  title: string,
  subheading: string,
}

@Component({
  selector: 'app-microsoftskills-enroll',
  templateUrl: './microsoftskills-enroll.component.html',
  styleUrls: ['./microsoftskills-enroll.component.scss']
})
export class MicrosoftskillsEnrollComponent implements OnInit {

  constructor( private router: Router,
               private spinner: NgxSpinnerService) { }




  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  alerts: alerts[] = [
    {

      background: "alert-dark-bg",
      color: "alert-text-dark-bg",
      icon: "check",
      iconColor: "icon-dark-clr",
      message: "How to be more effective at manipulation & viewing data in from large lists. ",
    },
    {

      background: "alert-dark-bg",
      color: "alert-text-dark-bg",
      icon: "check",
      iconColor: "icon-dark-clr",
      message: "How to use formula to create summary data & introduces the most frequently used chart types in Excel",
    },
    {

      background: "alert-dark-bg",
      color: "alert-text-dark-bg",
      icon: "check",
      iconColor: "icon-dark-clr",
      message: "How to build Absolute Cell Referencing skills for more efficient formula creation",
    },
    {

      background: "alert-dark-bg",
      color: "alert-text-dark-bg",
      icon: "check",
      iconColor: "icon-dark-clr",
      message: "How to generate data based on other columns (IF function)",
    },
    {

      background: "alert-dark-bg",
      color: "alert-text-dark-bg",
      icon: "check",
      iconColor: "icon-dark-clr",
      message: "Using VLOOKUP to ‘fetch’ data from other sheets or workbooks",
    },
    {

      background: "alert-dark-bg",
      color: "alert-text-dark-bg",
      icon: "check",
      iconColor: "icon-dark-clr",
      message: "Using Pivot Tables to summarise & present complex data in meaningful ways whilst still being able to interrogate the data",
    },
  ];
  //enroll-page
  navigate() {
    this.router.navigate(['/microsoft-office-skills']);
  }




}
