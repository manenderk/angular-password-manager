import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageContainerComponent } from './admin-page-container/admin-page-container.component';
import { HeaderComponent } from './page-sections/header/header.component';
import { FooterComponent } from './page-sections/footer/footer.component';
import { SidebarComponent } from './page-sections/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageContainerComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
]

@NgModule({
  declarations: [DashboardComponent, AdminPageContainerComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
