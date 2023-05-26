import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-interpersonalskills',
  templateUrl: './interpersonalskills.component.html',
  styleUrls: ['./interpersonalskills.component.scss']
})
export class InterpersonalskillsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {}


  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

}
