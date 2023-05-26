import { Component, OnInit } from '@angular/core';
interface cards {
  image: string;
  colors: string;
  lessionTitle:string;
  fxLable:string;
  lessionSubTitle:string;
}
@Component({
  selector: 'app-manage-card',
  templateUrl: './managementdevelopment-card.component.html',
  styleUrls: ['./managementdevelopment-card.component.scss']
})
export class ManagementdevelopmentCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards: cards [] = [
    {
      image: "assets/images/manage/pexels-pixabay-416405.svg",
      colors: "accents",
      lessionTitle:"Fundamentals of Management",
      lessionSubTitle:"This interactive workshop is designed to nagement role... ",
      fxLable:"Internal",
    },
    {
      image: "assets/images/manage/pexels-canva-studio-3194524.svg",
      colors: "accents",
      lessionTitle:"Relationships & Performance Conversations",
      lessionSubTitle:"When all is going well, managing performance can seem...",
      fxLable:"Internal",


    },
    {
      image: "assets/images/manage/pexels-alexander-suhorucov-6457515.svg",
      colors: "accents",
      lessionTitle:"Delegation and Empowerment",
      lessionSubTitle:"A manager can only really be effective if they...",
      fxLable:"Internal",


    },
    {
      image: "assets/images/manage/pexels-andrea-piacquadio-3768911.svg",
      colors: "accents",
      lessionTitle:"Managing Myself using Emotional Intelligence",
      lessionSubTitle:"By developing our Emotional Intelligence...",
      fxLable:"Internal",

    },
    {
      image: "assets/images/manage/pexels-cottonbro-studio-4098228.svg",
      colors: "accents",
      lessionTitle:"Coaching Skills",
      lessionSubTitle:"A manager who is a good coach will...",
      fxLable:"Internal",

    },
  ]

}
