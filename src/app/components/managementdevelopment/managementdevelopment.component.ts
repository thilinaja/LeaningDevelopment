import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-managementdevelopment',
  templateUrl: './managementdevelopment.component.html',
  styleUrls: ['./managementdevelopment.component.scss']
})
export class ManagementdevelopmentComponent implements OnInit {



  constructor(private spinner: NgxSpinnerService) { }

  showSearchInput = false;

  showInput() {
    this.showSearchInput = true;
  }
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

}
