import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Credential } from '../models/credential.model';
import { AuthService } from './auth.service';
import { RootPassService } from './root-pass.service';
import { map } from 'rxjs/operators';
import firebase from 'firebase/app';
import * as CryptoJS from 'crypto-js';
//import AES from 'crypto/'

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  private userId: string | null = null;
  private rootPassword: string | null = null;
  private collectionName = '';
  private skippedKeys = [
    'createdAt',
    'modifiedAt',
    'id'
  ];
  private objectTypeKeys = [
    'tags'
  ];

  constructor(
    private authService: AuthService,
    private rootPassService: RootPassService,
    private fireStore: AngularFirestore
  ) {

    const user = this.authService.getUser();
    this.userId = user.uid;
    this.collectionName = 'creds-' + this.userId;
    this.authService.userSub.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.collectionName = 'creds-' + this.userId;
      } else {
        this.userId = null;
        this.collectionName = '';
      }
    })

    this.rootPassService.getRootPass().subscribe(pass => {
      this.rootPassword = pass;
    })
  }

  getAllCredentials(): Observable<Credential[]> {
    return this.fireStore.collection<Credential>(
      this.collectionName,
      ref => ref.orderBy('modifiedAt', 'desc')
    ).snapshotChanges().pipe(
      map(docs => {
        return docs.map(doc => {
          const credData = doc.payload.doc.data() as Credential;
          const id = doc.payload.doc.id;
          const cred: Credential = {id: id, ...credData};
          return this.decrypt(cred);
        })
      })
    )
  }

  getCredential(id: string) {
    const credDoc = this.getCredDocument(id);
    return credDoc.valueChanges().pipe(
      map(doc => {
        let cred: Credential | null;
        if (doc) {
          cred = {
            id: id,
            ...doc
          };
        } else {
          cred = null;
        }
        return this.decrypt(cred);
      })
    )
  }

  addCredential(cred: Credential) {
    cred.createdAt = firebase.firestore.Timestamp.now();
    cred.modifiedAt = firebase.firestore.Timestamp.now();
    cred = this.encrypt(cred);

    return this.fireStore.collection<Credential>(
      this.collectionName
    ).add(cred);
  }

  updateCredential(cred: Credential) {
    const credDoc = this.getCredDocument(cred.id);
    cred.modifiedAt = firebase.firestore.Timestamp.now();

    return credDoc.update(cred);
  }

  deleteCredentials(id: string) {
    const credDoc = this.getCredDocument(id);
    return credDoc.delete()
  }

  encrypt(cred: Credential): Credential {

    if (!cred) {
      return;
    }

    if (!this.rootPassword) {
      throw new Error('root password not available');
    }

    for (const key in cred) {
      if (Object.prototype.hasOwnProperty.call(cred, key)) {
        if (!this.skippedKeys.includes(key)) {
          let unencryptedData = cred[key];
          if (this.objectTypeKeys.includes(key)) {
            unencryptedData = JSON.stringify(unencryptedData);
          }
          cred[key] = CryptoJS.AES.encrypt(unencryptedData, this.rootPassword).toString();
        }
      }
    }
    return cred;
  }

  decrypt(cred: Credential): Credential {
    if (!cred) {
      return;
    }

    if (!this.rootPassword) {
      throw new Error('root password not available');
    }

    for (const key in cred) {
      if (Object.prototype.hasOwnProperty.call(cred, key)) {
        if (!this.skippedKeys.includes(key)) {
          let encryptedData = cred[key];

          cred[key] = CryptoJS.AES.decrypt(encryptedData, this.rootPassword).toString(CryptoJS.enc.Utf8);
          if (this.objectTypeKeys.includes(key)) {
            cred[key] = JSON.parse(cred[key]);
          }
        }
      }
    }
    return cred;
  }

  private getCredDocument(id: string): AngularFirestoreDocument<Credential> {
    return this.fireStore.collection<Credential>(this.collectionName).doc<Credential>(id);
  }
}
