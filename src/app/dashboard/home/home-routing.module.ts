import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AnalyticsComponent } from '../analytics/analytics.component';

import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: "main",
    component: MainDashboardComponent,
  },


  {
    path: "analytics",
   
    component: AnalyticsComponent,
  },
  {
    path: "user-detail",
   
    component: UserDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
