import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUser: firebase.User = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.user;
  }

  doLogout() {
    this.authService.doLogout();
    this.router.navigate(['/']);
  }

}
