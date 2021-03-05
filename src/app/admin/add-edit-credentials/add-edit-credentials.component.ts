import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CredentialService } from 'src/app/services/credential.service';
import firebase from 'firebase/app';
import { Credential } from 'src/app/models/credential.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-add-edit-credentials',
  templateUrl: './add-edit-credentials.component.html',
  styleUrls: ['./add-edit-credentials.component.scss']
})
export class AddEditCredentialsComponent implements OnInit {

  currentUser: firebase.User = null;
  crendential: Credential = null;
  credFormGroup: FormGroup;

  constructor(
    private authService: AuthService,
    private credService: CredentialService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.initializeFormGroup();
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
