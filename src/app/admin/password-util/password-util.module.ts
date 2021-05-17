import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratePasswordComponent } from './generate-password/generate-password.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: GeneratePasswordComponent
  },
  {
    path: 'generate-password',
    component: GeneratePasswordComponent
  }
];

@NgModule({
  declarations: [
    GeneratePasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class PasswordUtilModule { }
