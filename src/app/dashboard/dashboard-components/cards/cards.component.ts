import { Component, OnInit } from '@angular/core';

interface cards {
  image: string;
  colors: string;
  lessionTitle:string;
  fxLable:string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards: cards [] = [
    {
      image: "assets/images/lession/pexels-christina-morillo-1181307.svg",
      colors: "accents",
      lessionTitle:"Research & Execution Skills",
      fxLable:"Internal",
    },
    {
      image: "assets/images/lession/pexels-cottonbro-studio-5989931.svg",
      colors: "accents",
      lessionTitle:"Candidate Management Skills",
      fxLable:"Internal",


    },
    {
      image: "assets/images/lession/pexels-sora-shimazaki-566885975.svg",
      colors: "accents",
      lessionTitle:"Client Interaction Skills",
      fxLable:"Internal",


    },
    {
      image: "assets/images/lession/pexels-cottonbro-studio-5989927.svg",
      colors: "primary",
      lessionTitle:"Search Fundamentals",
      fxLable:"External",

    },
  ]

}
