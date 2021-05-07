import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { Credential } from 'src/app/models/credential.model';
import { CredentialService } from 'src/app/services/credential.service';
import { RootPassService } from 'src/app/services/root-pass.service';
import { sortArrayOfObjectByKey } from 'src/app/utils/functions/sortArrayOfObjectByKey';
import { SubSink } from 'subsink';
import firebase from 'firebase/app';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentSortBy = 'usage';
  credentials: Credential[] = [];
  searchQuery = '';

  private subsink = new SubSink();

  constructor(
    private rootPassService: RootPassService,
    private credService: CredentialService,
    private clipService: ClipboardService
  ) { }

  ngOnInit(): void {
    this.subsink.sink = this.rootPassService.getRootPassSubj().subscribe(pass => {
      if (pass) {
        this.getCredentials();
      }
    });
  }

  getCredentials() {
    this.subsink.sink = this.credService.getAllCredentials().subscribe(creds => {
      this.credentials = creds;
      this.changeSort(this.currentSortBy);
      console.log(this.credentials);
    });
  }

  copy(cred: Credential, key: string) {
    this.clipService.copy(cred[key]);

    const now = firebase.firestore.Timestamp.now();
    const secDiff = now.seconds - cred.modifiedAt.seconds;

    if (secDiff < 300) { // return if same credential is used in last 5 minutes.
      return;
    }

    cred.useCount = cred.useCount ? ++cred.useCount : 1;
    this.credService.updateCredential(cred);
  }

  deleteCred(id: string) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger rounded-pill',
        cancelButton: 'btn btn-default rounded-pill'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.credService.deleteCredentials(id);
      }
    })
  }

  changeSort(by = 'newest') {

    this.currentSortBy = by;
    if (by == 'usage') {
      this.credentials = sortArrayOfObjectByKey(this.credentials,  'useCount', false);
    } else if (by === 'newest') {
      this.credentials = sortArrayOfObjectByKey(this.credentials, 'createdAt', false);
    } else if (by === 'a-z') {
      this.credentials = sortArrayOfObjectByKey(this.credentials, 'name', true);
    } else if (by === 'z-a') {
      this.credentials = sortArrayOfObjectByKey(this.credentials, 'name', false);
    }

  }

  isArray(obj : any ) {
    return Array.isArray(obj)
  }
}
