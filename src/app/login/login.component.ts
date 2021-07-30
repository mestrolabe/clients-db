import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  signin(): void {
    this.auth.signInWithEmailAndPassword(this.email, this.password).catch(error => console.log(error.code)).then(result => console.log(result)).then(() => {
      this.router.navigate(['/client-list']);
    })
  }
}
