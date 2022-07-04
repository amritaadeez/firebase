import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { CreateNewCategoryComponent } from './categories/create-new-category/create-new-category.component';
import { IntroQuestionComponent } from './intro-question/intro-question.component';
import { PaymentComponent } from './payment/payment.component';
import { CreateNewProgramComponent } from './programs/create-new-program/create-new-program.component';
import { ProgramDetailsComponent } from './programs/program-details/program-details.component';
import { ProgramsListComponent } from './programs/programs-list/programs-list.component';



const routes: Routes = [{
  path: "",
  component: LayoutComponent,
  children: [

  
    {
      path: 'home',
      loadChildren: () => import(`./home/home.module`).then(
        module => module.HomeModule
      )
    },
    {
      path: 'meditation',
      loadChildren: () => import(`./meditation/meditation.module`).then(
        module => module.MeditationModule
      )
    },
    {
      path: 'payment-setup',
      component: PaymentComponent
    },
    {
      path: 'categories',
      component: CategoriesListComponent
    },
    {
      path: 'create-new-category',
      component: CreateNewCategoryComponent
    },
    {
      path: 'category-detail',
      component: CategoryDetailComponent
    },
    {
      path: 'programs',
      component: ProgramsListComponent
    },
    {
      path: 'programs-new-category',
      component: CreateNewProgramComponent
    },
    {
      path: 'program-detail',
      component: ProgramDetailsComponent
    },
    {
      path: 'intro-question',
      component: IntroQuestionComponent
    },


    {
      path: "**",
      component: PageNotFoundComponent,
    },
  ],
}, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
