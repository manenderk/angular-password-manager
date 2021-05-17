import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.scss']
})
export class GeneratePasswordComponent implements OnInit {

  password: string = '';
  alps: string = 'abcdefghijklmnopqrstuvwxyz';
  nums: string = '0123456789';
  specs: string = '~!@#$%^&*';

  constructor(
    private clipService: ClipboardService
  ) { }

  ngOnInit(): void {
    this.generatePassword();
  }


  generatePassword() {
    let passwordLength = 10;
    let newPassword = '';

    while(newPassword.length < passwordLength) {
      newPassword += this.alps[Math.ceil(Math.random() * (this.alps.length - 1))];
      newPassword += this.alps[Math.ceil(Math.random() * (this.alps.length - 1))].toUpperCase();
      newPassword += this.nums[Math.ceil(Math.random() * (this.nums.length - 1))];
      newPassword += this.specs[Math.ceil(Math.random() * (this.specs.length - 1))];
    }

    newPassword = newPassword.slice(0, passwordLength);

    this.password = newPassword;
  }

  copy() {
    this.clipService.copy(this.password);
  }

}
