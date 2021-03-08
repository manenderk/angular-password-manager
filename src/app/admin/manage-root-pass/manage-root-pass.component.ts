import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RootPassService } from 'src/app/services/root-pass.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-manage-root-pass',
  templateUrl: './manage-root-pass.component.html',
  styleUrls: ['./manage-root-pass.component.scss']
})
export class ManageRootPassComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('openPasswordModal') openPasswordModal: ElementRef<HTMLButtonElement>;
  @ViewChild('closePasswordModal') closePasswordModal: ElementRef<HTMLButtonElement>;

  errorMessage = '';
  passFormGroup: FormGroup;
  viewPass = {
    pass1: false,
    pass2: false
  };

  private isModalOpenend = false;
  private subsink = new SubSink();

  constructor(
    private rootPassService: RootPassService
  ) { }

  ngOnInit() {
    this.passFormGroup = new FormGroup({
      pass1: new FormControl(null, Validators.required),
      pass2: new FormControl(null, Validators.required)
    });

    this.passFormGroup.valueChanges.subscribe(values => {
      if (values.pass1 && !values.pass1.match(/[a-z]/)) {
        this.errorMessage = 'Password should have atleast one lower case letter';
      } else if (values.pass1 && !values.pass1.match(/[A-Z]/)) {
        this.errorMessage = 'Password should have atleast one upper case letter';
      } else if (values.pass1 && !values.pass1.match(/\d/)) {
        this.errorMessage = 'Password should have atleast one number';
      } else if (values.pass1 && !values.pass1.match(/[!@#$%^&*()_\-+={\[}\]|\\:;"'<,>.?\/~`]/)) {
        this.errorMessage = 'Password should have atleast special character';
      } else if (values.pass1 && values.pass1.length < 8) {
        this.errorMessage = 'Password should be of atleast of 8 characters';
      } else if (values.pass1 && values.pass2 && values.pass1 != values.pass2) {
        this.errorMessage = 'Passwords are not same';
      } else {
        this.errorMessage = '';
      }
    })
  }

  ngAfterViewInit() {

    this.subsink.sink = this.rootPassService.showRootPassInputModal.subscribe(show => {
      if (show) {
        this.openModal();
      }
    })

    this.subsink.sink = this.rootPassService.getRootPassSubj().subscribe(pass => {
      if (!pass) {
        this.openModal();
      }
    })
  }

  ngOnDestroy() {
    this.subsink.unsubscribe();
  }

  savePassword() {
    this.rootPassService.setRootPass(this.passFormGroup.value.pass1);
    this.closeModal();
  }

  openModal() {
    if (!this.isModalOpenend) {
      this.openPasswordModal.nativeElement.click();
      this.isModalOpenend = true;
    }
  }

  closeModal() {
    this.isModalOpenend = false;
    this.closePasswordModal.nativeElement.click();
    this.rootPassService.showRootPassInputModal.next(false);
  }

}

