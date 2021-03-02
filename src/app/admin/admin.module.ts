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
  declarations: [DashboardComponent, AdminPageContainerComponent, HeaderComponent, FooterComponent, SidebarComponent, ProfileComponent, AddEditCredentialsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
