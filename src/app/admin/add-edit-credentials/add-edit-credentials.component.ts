import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { CredentialService } from 'src/app/services/credential.service';
import firebase from 'firebase/app';
import { SubSink } from 'subsink';
import { Credential } from 'src/app/models/credential.model';
@Component({
  selector: 'app-add-edit-credentials',
  templateUrl: './add-edit-credentials.component.html',
  styleUrls: ['./add-edit-credentials.component.scss']
})
export class AddEditCredentialsComponent implements OnInit, OnDestroy {

  currentUser: firebase.User = null;
  crendential: Credential = null;
  credFormGroup: FormGroup;

  private subsink = new SubSink();

  constructor(
    private auth: AngularFireAuth,
    private credService: CredentialService
  ) { }

  ngOnInit(): void {

    this.subsink.sink = this.auth.user.subscribe(user => {
      this.currentUser = user;
    })

    this.initializeFormGroup();
  }

  ngOnDestroy() {
    this.subsink.unsubscribe();
  }

  initializeFormGroup() {
    this.credFormGroup = new FormGroup({
      url: new FormControl(this.crendential?.url),
      name: new FormControl(this.crendential?.name),
      userId: new FormControl(this.crendential?.userId),
      password: new FormControl(this.crendential?.password),
      passwordConfirm: new FormControl(null),
      environment: new FormControl(this.crendential?.environment),
      tags: new FormControl(this.crendential?.tags),
      otherInfo: new FormControl(this.crendential?.otherInfo)
    });
  }

  saveCredentials() {
    console.log(this.credFormGroup.value);
  }

}
