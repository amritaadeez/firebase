import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LayoutComponent } from '../layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import {MatTabsModule} from '@angular/material/tabs';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    ProfileComponent,
    NavbarComponent,
    SidebarComponent,
    ResetPasswordComponent,
    LayoutComponent,
    PageNotFoundComponent,
    AnalyticsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatTooltipModule,
    Ng2SearchPipeModule,
    MatTabsModule
  ]
})
export class DashboardModule { }
