import { Component, OnInit } from '@angular/core';
interface cards {
  image: string;
  colors: string;
  lessionTitle:string;
  fxLable:string;
  fxRead:string
  colorstop:string;
}
@Component({
  selector: 'app-learn-card',
  templateUrl: './learningresources-card.component.html',
  styleUrls: ['./learningresources-card.component.scss']
})
export class LearningresourcesCardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  cards: cards [] = [
    {
      image: "assets/images/learn/document.svg",
      colors: "accents",
      lessionTitle:"Presentation Skills",
      fxLable:"ASSOCIATE",
      fxRead:"READ",
      colorstop:"read",
    },
    {
      image: "assets/images/learn/bxs-videos.svg",
      colors: "accents",
      lessionTitle:"Presentation Skills",
      fxLable:"ASSOCIATE",
      fxRead:"WATCH",
      colorstop:"watch",

    },
    {
      image: "assets/images/learn/audio-spectrum.svg",
      colors: "accents",
      lessionTitle:"Presentation Skills",
      fxLable:"ASSOCIATE",
      fxRead:"LISTING",
      colorstop:"listing",
    },
    {
      image: "assets/images/learn/bxs-videos.svg",
      colors: "accents",
      lessionTitle:"Presentation Skills",
      fxLable:"ASSOCIATE",
      fxRead:"WATCH",
      colorstop:"watch",
    },
    {
      image: "assets/images/learn/document.svg",
      colors: "accents",
      lessionTitle:"Presentation Skills",
      fxLable:"ASSOCIATE",
      fxRead:"READ",
      colorstop:"read",
    },
  ]

}
