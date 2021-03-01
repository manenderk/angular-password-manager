import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subsink = new SubSink();

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subsink.sink = this.auth.user.subscribe(user => {
      if (user) {
        this.router.navigate(['/admin']);
      }
    })
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }

  login(provider: string): void {
    if (provider === 'google') {
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } else if (provider === 'microsoft') {
      this.auth.signInWithPopup(new firebase.auth.OAuthProvider('microsoft.com'))
    }
  }
}
