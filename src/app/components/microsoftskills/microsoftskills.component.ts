import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-microsoftskills',
  templateUrl: './microsoftskills.component.html',
  styleUrls: ['./microsoftskills.component.scss']
})
export class MicrosoftskillsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
}
