import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  currentUser: firebase.User = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.user;
  }


  async doLogout() {
    await this.authService.doLogout();
    this.router.navigate(['/']);
  }

}
