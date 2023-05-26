import { Component, OnInit } from '@angular/core';
interface cards {
  image: string;
  colors: string;
  lessionTitle:string;
  fxLable:string;
}
@Component({
  selector: 'app-inter-card',
  templateUrl: './interpersonalskills-card.component.html',
  styleUrls: ['./interpersonalskills-card.component.scss']
})
export class InterpersonalskillsCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards: cards [] = [
    {
      image: "assets/images/inter/pexels-fauxels-3184312x.svg",
      colors: "accents",
      lessionTitle:"Communication Skills",
      fxLable:"Internal",
    },


  ]

}

