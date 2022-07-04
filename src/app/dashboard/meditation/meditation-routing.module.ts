import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewComponent } from './create-new/create-new.component';
import { MeditationListComponent } from './meditation-list/meditation-list.component';

const routes: Routes = [
  {
    path: 'meditation-list',
    component: MeditationListComponent
  },
  {
    path: 'create-new',
    component: CreateNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeditationRoutingModule { }
