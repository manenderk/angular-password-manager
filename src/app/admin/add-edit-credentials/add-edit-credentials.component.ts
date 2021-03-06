import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CredentialService } from 'src/app/services/credential.service';
import firebase from 'firebase/app';
import { Credential } from 'src/app/models/credential.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-add-edit-credentials',
  templateUrl: './add-edit-credentials.component.html',
  styleUrls: ['./add-edit-credentials.component.scss']
})
export class AddEditCredentialsComponent implements OnInit {

  currentUser: firebase.User = null;
  crendential: Credential | null = null;
  credFormGroup: FormGroup;

  private subsink = new SubSink();

  constructor(
    private authService: AuthService,
    private credService: CredentialService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subsink.sink = this.route.paramMap.subscribe(async params => {
      const id = params.get('id');
      if (id) {
        this.credService.getCredential(id).subscribe(cred => {
          this.crendential = cred;
          this.initializeFormGroup();
        })
      } else {
        this.crendential = null;
        this.initializeFormGroup();
      }
    })

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

  async saveCredentials() {
    if (this.credFormGroup.valid) {
      const cred: Credential = {...this.credFormGroup.value};
      if (this.crendential) {
        cred.id = this.crendential.id;
        await this.credService.updateCredential(cred);
      } else {
        await this.credService.addCredential(cred);
      }

      this.credFormGroup.reset();
      Swal.fire('Success', 'Credential saved', 'success');
    }
  }

}
