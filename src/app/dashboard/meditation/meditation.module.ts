import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeditationRoutingModule } from './meditation-routing.module';
import { MeditationListComponent } from './meditation-list/meditation-list.component';
import { CreateNewComponent } from './create-new/create-new.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [
    MeditationListComponent,
    CreateNewComponent
  ],
  imports: [
    CommonModule,
    MeditationRoutingModule,
    NgxPaginationModule
  ]
})
export class MeditationModule { }
