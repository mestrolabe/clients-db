import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'კლიენტთა მონაცემები';
  loggedIn = undefined;
  menuItems!: MenuItem[];


  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'კლიენტთა სია',
        routerLink: ['/client-list'],
        routerLinkActiveOptions: { exact: true }
      }
    ];
  }

  logOut() {
    this.auth.signOut().then(() => {
      window.location.reload();
    }).catch((error) => {
      console.log(error);
    });
  }
}