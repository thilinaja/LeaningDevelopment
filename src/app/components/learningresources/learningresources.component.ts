import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-learningresources',
  templateUrl: './learningresources.component.html',
  styleUrls: ['./learningresources.component.scss']
})
export class LearningresourcesComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
}
