import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import { DocumentService } from './../../services/document.service';

import {
  MatSnackBar
} from '@angular/material/snack-bar';
import {
  Router,ActivatedRoute
} from '@angular/router';
import {
  AuthenticationService
} from 'src/app/auth.service';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-intro-question',
  templateUrl: './intro-question.component.html',
  styleUrls: ['./intro-question.component.scss']
})
export class IntroQuestionComponent implements OnInit {
  color = '#0D87D1';
  mode: ProgressBarMode = 'determinate';
  value = 34;
  value1 = 12;
  value2 = 52;
  bufferValue = 75;
  documents: any;
  docid: unknown[];
  array = []
  constructor( private route : ActivatedRoute,
    private _documentService : DocumentService,  private _snackBar: MatSnackBar, public dialog: MatDialog , private router: Router, private AuthenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.getDocumentList()
    
  }

  getDocumentList = () =>
  this._documentService
    .GetDocumentQuestionList()
    .subscribe(res => {
      this.documents = res;
      this.playButton(this.documents)
      //console.log("username", this.documents)
    });

    playButton(item:any){
this.array = []
        item.map((val)=>{
          console.log(val.payload.doc.id)
         this._documentService.GetintroQuesList(val.payload.doc.id).subscribe(res => {
          this.docid = res;
          this.array.push(res)

          console.log( this.array)

          this.docid = this.array

  
   
      });
        })
     
  }

}
