import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-consultantdevelopment',
  templateUrl: './consultantdevelopment.component.html',
  styleUrls: ['./consultantdevelopment.component.scss']
})
export class ConsultantdevelopmentComponent implements OnInit {


  constructor(private spinner: NgxSpinnerService) {}


  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
}
