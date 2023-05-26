import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface cards {
  image: string;
  colors: string;
  lessionTitle:string;
  fxLable:string;
}
@Component({
  selector: 'app-skill-card',
  templateUrl: './microsoftskills-card.component.html',
  styleUrls: ['./microsoftskills-card.component.scss']
})
export class MicrosoftskillsCardComponent implements OnInit {
  constructor(  private router: Router) { }

  ngOnInit(): void {
  }

  cards: cards [] = [
    {
      image: "assets/images/skills/free-microsoft-powerpoint-alternative.svg",
      colors: "accents",
      lessionTitle:"Presentation Skills",
      fxLable:"Internal",
    },

    {
      image: "assets/images/skills/excel.svg",
      colors: "accents",
      lessionTitle:"Working with Microsoft Excel",
      fxLable:"Internal",
    },

  ];

  //enroll-page
  navigate() {
    this.router.navigate(['/microsoft-office-skills-enroll']);
  }
}
