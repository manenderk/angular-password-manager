import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateService {

  constructor(private updates: SwUpdate) {  }

  checkForUpdates() {
    this.updates.available.subscribe((event) => {
      this.showAppUpdateAlert();
    });
  }

  private showAppUpdateAlert() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary rounded-pill',
        cancelButton: 'btn btn-default rounded-pill',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Hi',
        text: 'An app upgrade is available',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Yes, Update!',
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.doAppUpdate();
        }
      });
  }

  private async doAppUpdate() {
    await this.updates.activateUpdate();
    window.location.reload();
  }
}
