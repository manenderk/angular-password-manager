import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { Credential } from 'src/app/models/credential.model';
import { CredentialService } from 'src/app/services/credential.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  credentials: Credential[] = [];

  constructor(
    private credService: CredentialService,
    private clipService: ClipboardService
  ) { }

  ngOnInit(): void {
    this.getCredentials();
  }

  getCredentials() {
    this.credService.getAllCredentials().subscribe(creds => {
      this.credentials = creds;
    });
  }

  copy(cred: Credential, key: string) {
    this.clipService.copy(cred[key]);
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
}
