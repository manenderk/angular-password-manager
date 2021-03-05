import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subsink = new SubSink();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subsink.sink = this.authService.userSub.subscribe(user => {
      if (user) {
        this.router.navigate(['/admin']);
      }
    })
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }

  login(provider: string): void {
    this.authService.doLogin(provider);
  }
}
