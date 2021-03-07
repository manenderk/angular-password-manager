import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RootPassService {

  showRootPassInputModal: BehaviorSubject<boolean> = new BehaviorSubject(false)

  private rootPass: string | null = '';
  private rootPassSubj: BehaviorSubject<string | null> = new BehaviorSubject('');

  constructor() { }


  getRootPass() {
    return this.rootPassSubj;
  }

  updateRootPass(pass: string) {
    this.rootPass = pass;
    this.rootPassSubj.next(pass);
  }

  encryptCredential(cred: Credential) {

    if (!this.rootPass) {
      throw new Error('root pass not present');
    }

    for (const key in cred) {
      if (Object.prototype.hasOwnProperty.call(cred, key)) {
        const element = cred[key];

      }
    }
  }
}
