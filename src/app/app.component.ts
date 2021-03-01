import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subsink = new SubSink();

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  async ngOnInit() {
    this.subsink.sink = this.auth.user.subscribe(user => {
      if (!user) {
        this.router.navigate(['/auth']);
      } else {
        this.router.navigate(['/admin']);
      }
    })
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
