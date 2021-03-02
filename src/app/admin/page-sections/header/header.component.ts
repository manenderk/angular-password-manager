import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { SubSink } from 'subsink';
import firebase from 'firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {


  currentUser: firebase.User = null;
  private subsink = new SubSink();

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subsink.sink = this.auth.user.subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    })
  }

  ngOnDestroy() {
    this.subsink.unsubscribe();
  }

  async doLogout() {
    await this.auth.signOut();
    this.router.navigate(['/']);
  }

}
