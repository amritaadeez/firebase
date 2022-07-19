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
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import {MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss']
})
export class ProgramsListComponent implements OnInit {


  selectedData: any
p: number = 1;
showAction: boolean;
editDocumentForm:FormGroup;
selectedIndex: any


documents: any;
id: any;
constructor( private _documentService : DocumentService,  private _snackBar: MatSnackBar, public dialog: MatDialog , private router: Router, private AuthenticationService: AuthenticationService) {
  this.editDocumentForm = new FormGroup ({
    title: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
    background_image: new FormControl (null),

  });
}

ngOnInit(): void {

  this.getDocumentList();
}

changeRoute(data: any) {
  this.AuthenticationService.dataTransfer.next(data)
  this.router.navigate(['/dashboard/program-detail'])
}

getDocumentList = () =>
this._documentService
  .GetDocumentProgramsList()
  .subscribe(res => {
    this.documents = res;
    console.log(this.documents.payload)
  });

  updateProgram(form: any, item:any) {
    console.log(form.value)
   console.log(item.payload.doc.id)
      this._documentService.updateProgramDocument(item.payload.doc.id, form.value)
      .then(
        res => {
          this.selectedIndex = null
            this.showAction = false
          this._snackBar.open("Updated Successfully", "Thanks", {
            duration: 3000
          });
          this.router.navigate(['/dashboard/programs'])
        }
      )
    
  }

    
  openDialog(item: any, text: any) {

    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
       data: {
        items: item,
        text: text
       },
     });
 
     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed', result);
       if (result.event == "Proceed") {
       this._documentService.DeleteProgram(result.data.items);
       this._snackBar.open("Deleted Successfully", "Thanks", {
        duration: 3000
      });
       } else {
 
       }
     });
   }


  deleteDocument = data => this._documentService.DeleteDocument(data);

  editAction(index: any, data: any){
    this.selectedIndex = index
    console.log(this.selectedIndex)
    this.editDocumentForm.controls['title'].setValue(data.payload.doc.data().title);
      this.editDocumentForm.controls['background_image'].setValue(data.payload.doc.data().background_image);
    this.showAction = true
  }
  cancelAction(){
    this.selectedIndex = null
    this.showAction = false
  }

}


