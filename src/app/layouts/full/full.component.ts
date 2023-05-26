import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router} from "@angular/router";

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {
  isDarkMode: boolean = true;
  search: boolean = false;
  showSidebarAndFooter: boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private router: Router) { }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [

    {
      link: "/home",
      icon: "home",
      menu: "Associate Development",
    },
    {
      link: "/management-development",
      icon: "user",
      menu: "Management Development",
    },
    {
      link: "/consultant-development",
      icon: "user",
      menu: "Consultant Development",
    },
    {
      link: "/interpersonal-skills",
      icon: "users",
      menu: "Interpersonal Skills",
    },
    {
      link: "/microsoft-office-skills",
      icon: "book",
      menu: "Microsoft Office Skills",
    },
  ]
  //COURSES TEXT
  exampleCoursesLabel: string = "COURSES";
  courseLibaray: string = "LIBRARY";


  sidebarMenus1: sidebarMenu[] = [


    {
      link: "/learning-resources",
      icon: "file-text",
      menu: "Learning Resources",
    },

  ]
}
