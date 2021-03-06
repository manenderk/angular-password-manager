import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Credential } from '../models/credential.model';
import { AuthService } from './auth.service';
import { RootPassService } from './root-pass.service';
import { map } from 'rxjs/operators';
import firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  private userId: string | null = null;
  private rootPassword: string | null = null;
  private collectionName = '';

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

    console.log(cred, this.collectionName);
    return this.fireStore.collection<Credential>(
      this.collectionName
    ).add(cred);
  }

  updateCredential(cred: Credential) {
    const credDoc = this.getCredDocument(cred.id);
    cred.modifiedAt = firebase.firestore.Timestamp.now();

    console.log(cred, this.collectionName);
    return credDoc.update(cred);
  }

  deleteCredentials(id: string) {
    const credDoc = this.getCredDocument(id);
    return credDoc.delete()
  }

  encrypt(cred: Credential): Credential {

    return cred;
  }

  decrypt(cred: Credential): Credential {

    return cred;
  }

  private getCredDocument(id: string): AngularFirestoreDocument<Credential> {
    return this.fireStore.collection<Credential>(this.collectionName).doc<Credential>(id);
  }
}
