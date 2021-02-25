import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      console.log(user);
    })
  }

  login(provider: string) {
    if (provider === 'google') {
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } else if (provider === 'microsoft') {
      this.auth.signInWithPopup(new firebase.auth.OAuthProvider('microsoft.com'))
    }
  }
}
