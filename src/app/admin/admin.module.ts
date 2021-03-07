import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageContainerComponent } from './admin-page-container/admin-page-container.component';
import { HeaderComponent } from './page-sections/header/header.component';
import { FooterComponent } from './page-sections/footer/footer.component';
import { SidebarComponent } from './page-sections/sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { AddEditCredentialsComponent } from './add-edit-credentials/add-edit-credentials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { ManageRootPassComponent } from './manage-root-pass/manage-root-pass.component';
import { ClipboardModule } from 'ngx-clipboard';
import { PipesModule } from '../utils/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: AdminPageContainerComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'credential/add',
        component: AddEditCredentialsComponent
      },
      {
        path: 'credential/edit/:id',
        component: AddEditCredentialsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
]

@NgModule({
  declarations: [DashboardComponent, AdminPageContainerComponent, HeaderComponent, FooterComponent, SidebarComponent, ProfileComponent, AddEditCredentialsComponent, ManageRootPassComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    ClipboardModule,
    PipesModule
  ]
})
export class AdminModule { }
