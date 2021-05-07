import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class RootPassService {

  showRootPassInputModal: BehaviorSubject<boolean> = new BehaviorSubject(false)

  private rootPassword: BehaviorSubject<string> = new BehaviorSubject('kMan@123d');

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

  encrypt(obj: any, skippedKeys: string[] = [], objectTypeKeys: string[] = [], numberTypeKeys: string[] = []): any {

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
          } else if (numberTypeKeys.includes(key)) {
            unencryptedData = unencryptedData.toString();
          }
          try {
            obj[key] = CryptoJS.AES.encrypt(unencryptedData, this.rootPassword.value).toString();
          } catch (e) {
            console.log('encryption failure', key, obj[key], e);
          }

        }
      }
    }
    return obj;
  }

  decrypt(obj: any, skippedKeys: string[] = [], objectTypeKeys: string[] = [], numberTypeKeys: string[] = []): any {
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
          try {
            obj[key] = CryptoJS.AES.decrypt(encryptedData, this.rootPassword.value).toString(CryptoJS.enc.Utf8);
          } catch (e) {
            console.log('decryption failure', key, obj[key]), e;
          }

          if (objectTypeKeys.includes(key)) {
            try {
              obj[key] = JSON.parse(obj[key]);
            } catch (e) {
              console.log(e);
              obj[key] = null;
            }
          } else if (numberTypeKeys.includes(key)) {
            obj[key] = parseFloat(obj[key]);
          }
        }
      }
    }
    return obj;
  }
}
