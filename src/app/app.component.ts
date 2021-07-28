import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'კლიენტთა მონაცემები';
  
  menuItems!: MenuItem[];


  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'კლიენტთა სია',
        routerLink: ['/client-list'],
        routerLinkActiveOptions: { exact: true }
      }
    ];
  }
}