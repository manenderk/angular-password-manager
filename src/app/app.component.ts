import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { AppUpdateService } from './services/app-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subsink = new SubSink();

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private appUpdate: AppUpdateService
  ) {}

  async ngOnInit() {
    this.subsink.sink = this.auth.user.subscribe(user => {
      if (!user) {
        this.router.navigate(['/auth']);
      } else {
        this.router.navigate(['/admin']);
      }
    })

    this.appUpdate.checkForUpdates();
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
