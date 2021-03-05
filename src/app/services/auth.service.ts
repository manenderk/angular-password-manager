import { Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Subject } from 'rxjs';
import { SubSink } from 'subsink';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localKey = 'pmAU';
  private subsink = new SubSink();

  private user: firebase.User | null;
  userSub: Subject<firebase.User | null> = new Subject();

  constructor(
    private auth: AngularFireAuth
  ) {
    const user = this.getUserFromLocalStorage();
    if (user) {
      this.updateCurrentUser(user, false);
    }
    this.subsink.sink = this.auth.user.subscribe(user => {
      this.updateCurrentUser(user);
    })
  }

  getUser() {
    return this.user;
  }

  doLogin(provider: string) {
    if (provider === 'google') {
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } else if (provider === 'microsoft') {
      this.auth.signInWithPopup(new firebase.auth.OAuthProvider('microsoft.com'))
    }
  }

  doLogout() {
    this.auth.signOut();
    this.clearUserFromLocalStorage();
  }

  private updateCurrentUser(user: firebase.User | null, updateLocalStorage = true) {
    this.user = user;
    this.userSub.next(user);

    if (updateLocalStorage) {
      this.saveUserToLocalStorage(user);
    }
  }

  private clearUserFromLocalStorage() {
    localStorage.removeItem(this.localKey);
  }

  private saveUserToLocalStorage(user: firebase.User) {
    if (user) {
      localStorage.setItem(this.localKey, JSON.stringify(user));
    }
  }

  private getUserFromLocalStorage(): firebase.User | null {
    const userString = localStorage.getItem(this.localKey);
    if (!userString) {
      return null;
    }
    const user: firebase.User = JSON.parse(userString);
    return user;
  }
}
