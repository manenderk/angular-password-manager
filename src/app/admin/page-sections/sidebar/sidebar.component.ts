import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUser: firebase.User = null;
  private subsink = new SubSink();

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subsink.sink = this.auth.user.subscribe(user => {
      this.currentUser = user;
    })
  }

  ngOnDestroy() {
    this.subsink.unsubscribe();
  }

  doLogout() {
    this.auth.signOut();
    this.router.navigate(['/']);
  }

}
