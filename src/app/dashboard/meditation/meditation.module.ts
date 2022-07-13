import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeditationRoutingModule } from './meditation-routing.module';
import { MeditationListComponent } from './meditation-list/meditation-list.component';
import { CreateNewComponent } from './create-new/create-new.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NgxFileDropModule } from 'ngx-file-drop';



@NgModule({
  declarations: [
    MeditationListComponent,
    CreateNewComponent
  ],
  imports: [
    CommonModule,
    MeditationRoutingModule,
    NgxPaginationModule,
    NgxFileDropModule
  ]
})
export class MeditationModule { }
