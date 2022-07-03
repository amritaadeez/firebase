import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
<<<<<<< HEAD
import { ProfileComponent } from './profile/profile.component';
=======

>>>>>>> merge
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
<<<<<<< HEAD

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    ProfileComponent,
=======
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PaymentComponent } from './payment/payment.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CreateNewCategoryComponent } from './categories/create-new-category/create-new-category.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { ProgramsListComponent } from './programs/programs-list/programs-list.component';
import { CreateNewProgramComponent } from './programs/create-new-program/create-new-program.component';
import { ProgramDetailsComponent } from './programs/program-details/program-details.component';
import { IntroQuestionComponent } from './intro-question/intro-question.component';


@NgModule({
  declarations: [

>>>>>>> merge
    NavbarComponent,
    SidebarComponent,
    ResetPasswordComponent,
    LayoutComponent,
    PageNotFoundComponent,
    AnalyticsComponent,
<<<<<<< HEAD
=======
    PaymentComponent,
    CategoriesListComponent,
    CreateNewCategoryComponent,
    CategoryDetailComponent,
    ProgramsListComponent,
    CreateNewProgramComponent,
    ProgramDetailsComponent,
    IntroQuestionComponent,

>>>>>>> merge
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
<<<<<<< HEAD
    MatTabsModule
=======
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxPaginationModule
>>>>>>> merge
  ]
})
export class DashboardModule { }
