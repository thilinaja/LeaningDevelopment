import { Component, OnInit } from '@angular/core';
interface cards {
  image: string;
  colors: string;
  lessionTitle:string;
  fxLable:string;
}
@Component({
  selector: 'app-con-card',
  templateUrl: './consultantdevelopment-card.component.html',
  styleUrls: ['./consultantdevelopment-card.component.scss']
})
export class ConsultantdevelopmentCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  cards: cards [] = [
    {
      image: "assets/images/consultant/pexels-fauxels-3184465.svg",
      colors: "accents",
      lessionTitle:"Build Client Relationships",
      fxLable:"Internal",
    },
    {
      image: "assets/images/consultant/pexels-thisisengineering-3861945.svg",
      colors: "accents",
      lessionTitle:"Business Development",
      fxLable:"Internal",


    },
    {
      image: "assets/images/consultant/pexels-shvets-production-7176319.svg",
      colors: "accents",
      lessionTitle:"Negotiation Skills",
      fxLable:"Internal",


    },

  ]

}

