import {
  Component,
  OnInit
} from '@angular/core';
import {
  ApiserviceService
} from 'src/app/apiservice.service';
import * as moment from 'moment';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import {
  Router
} from '@angular/router';
import {
  AuthenticationService
} from 'src/app/auth.service';
import { DocumentService } from './../../../services/document.service';
@Component({
  selector: 'app-meditation-list',
  templateUrl: './meditation-list.component.html',
  styleUrls: ['./meditation-list.component.scss']
})
export class MeditationListComponent implements OnInit {
  
  p: number = 1;
  

documents: any;
id: any;
constructor( private _documentService : DocumentService,private _snackbar: MatSnackBar, private router: Router, private AuthenticationService: AuthenticationService) {}

ngOnInit(): void {

  this.getDocumentList();
}

// getDocumentList = () =>
// this._documentService
//   .GetDocumentMeditationList()
//   .subscribe(res => {
//     this.documents = res;
//     console.log(this.documents)


//   });
getDocumentList = () =>
this._documentService
  .GetDocumentMeditationList()
  .subscribe(res => {

  

   this.documents = res;
    // console.log(this.documents)


  });

  deleteDocument = data => this._documentService.DeleteDocument(data);

  playButton(data){
    console.log("fghjk")
    this._documentService.Getaudios(data.payload.doc.id).subscribe(res => {
      console.log("chal ja")
  console.log(res)
       // console.log(this.documents)
   
   
     });
  }

}
