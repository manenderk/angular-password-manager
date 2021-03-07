import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class RootPassService {

  showRootPassInputModal: BehaviorSubject<boolean> = new BehaviorSubject(false)

  private rootPassword: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() { }


  getRootPass() {
    return this.rootPassword.value;
  }

  getRootPassSubj() {
    return this.rootPassword;
  }

  setRootPass(pass: string) {
    this.rootPassword.next(pass);
  }

  encrypt(obj: any, skippedKeys: string[] = [], objectTypeKeys: string[] = []): any {

    if (!obj) {
      return;
    }

    if (!this.rootPassword) {
      throw new Error('root password not available');
    }

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (!skippedKeys.includes(key)) {
          let unencryptedData = obj[key];
          if (objectTypeKeys.includes(key)) {
            unencryptedData = JSON.stringify(unencryptedData);
          }
          obj[key] = CryptoJS.AES.encrypt(unencryptedData, this.rootPassword.value).toString();
        }
      }
    }
    return obj;
  }

  decrypt(obj: any, skippedKeys: string[] = [], objectTypeKeys: string[] = []): any {
    if (!obj) {
      return;
    }

    if (!this.rootPassword) {
      throw new Error('root password not available');
    }

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (!skippedKeys.includes(key)) {
          let encryptedData = obj[key];

          obj[key] = CryptoJS.AES.decrypt(encryptedData, this.rootPassword.value).toString(CryptoJS.enc.Utf8);
          if (objectTypeKeys.includes(key)) {
            try {
              obj[key] = JSON.parse(obj[key]);
            } catch (e) {
              console.log(e);
              obj[key] = null;
            }
          }
        }
      }
    }
    return obj;
  }
}
