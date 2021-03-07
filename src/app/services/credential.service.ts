import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Credential } from '../models/credential.model';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import firebase from 'firebase/app';

import { RootPassService } from './root-pass.service';
//import AES from 'crypto/'

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  private userId: string | null = null;
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
    private fireStore: AngularFirestore,
    private rootPassService: RootPassService
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
          return this.decryptCred(cred);
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
        return this.decryptCred(cred);
      })
    )
  }

  addCredential(cred: Credential) {
    cred.createdAt = firebase.firestore.Timestamp.now();
    cred.modifiedAt = firebase.firestore.Timestamp.now();
    cred = this.encryptCred(cred);

    return this.fireStore.collection<Credential>(
      this.collectionName
    ).add(cred);
  }

  updateCredential(cred: Credential) {
    const credDoc = this.getCredDocument(cred.id);
    cred.modifiedAt = firebase.firestore.Timestamp.now();
    cred = this.encryptCred(cred);
    return credDoc.update(cred);
  }

  deleteCredentials(id: string) {
    const credDoc = this.getCredDocument(id);
    return credDoc.delete();
  }

  private getCredDocument(id: string): AngularFirestoreDocument<Credential> {
    return this.fireStore.collection<Credential>(this.collectionName).doc<Credential>(id);
  }

  private encryptCred(cred: Credential) : Credential {
    return this.rootPassService.encrypt(cred, this.skippedKeys, this.objectTypeKeys);
  }

  private decryptCred(cred: Credential): Credential {
    return this.rootPassService.decrypt(cred, this.skippedKeys, this.objectTypeKeys);
  }
}
