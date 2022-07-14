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
import {MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'app-meditation-list',
  templateUrl: './meditation-list.component.html',
  styleUrls: ['./meditation-list.component.scss']
})
export class MeditationListComponent implements OnInit {
  
  p: number = 1;
  

documents: any;
id: any;
  playUrl: unknown[];
constructor( private _documentService : DocumentService,private _snackbar: MatSnackBar, private router: Router, private AuthenticationService: AuthenticationService, public dialog: MatDialog) {}

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

  playButton(data, text:any){
    console.log("fghjk")
    this._documentService.Getaudios(data.payload.doc.id).subscribe(res => {
      console.log("chal ja")
  console.log(res)
  // this.playUrl = res
  let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    data: {
     items: res,
     text: text
    },
  });

  dialogRef.afterClosed().subscribe(result => {
    // console.log('The dialog was closed', result);
    // if (result.event == "Proceed") {
    // this._documentService.DeleteUser(result.data.items);
    // } else {

    // }
  });
       // console.log(this.documents)
   
   
     });
  }

  openDialog(datas: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
       data: {
        items: datas
       },
     });
 
     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed', result);
       if (result.event == "Proceed") {
       this._documentService.DeleteUser(result.data.items);
       } else {
 
       }
     });
   }

}
