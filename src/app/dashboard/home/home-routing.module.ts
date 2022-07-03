import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AnalyticsComponent } from '../analytics/analytics.component';
<<<<<<< HEAD
import { ProfileComponent } from '../profile/profile.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
=======

import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
>>>>>>> merge

const routes: Routes = [
  {
    path: "main",
    component: MainDashboardComponent,
  },

<<<<<<< HEAD
  {
    path: "profile",
   
    component: ProfileComponent,
  },
=======

>>>>>>> merge

  {
    path: "analytics",
   
    component: AnalyticsComponent,
  },
<<<<<<< HEAD
=======
  {
    path: "user-detail",
   
    component: UserDetailComponent,
  },
>>>>>>> merge
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
