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
import {MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

import {
  AuthenticationService
} from 'src/app/auth.service';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { DocumentService } from './../../../services/document.service';
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {


p: number = 1;
  showAction: boolean;
 
  documents: any;
  id: any;
  selectedIndex: any
  editDocumentForm:FormGroup;

  constructor(  private _snackBar: MatSnackBar, private _documentService : DocumentService, public dialog: MatDialog, private _snackbar: MatSnackBar, private router: Router, private AuthenticationService: AuthenticationService) {
    this.editDocumentForm = new FormGroup ({
      title: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
      background_image: new FormControl (null),

    });
  }

  ngOnInit(): void {

    this.getDocumentList();
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
       this._documentService.DeleteCategory(result.data.items);
       } else {
 
       }
     });
   }

  getDocumentList = () =>
  this._documentService
    .GetDocumentCategoriesList()
    .subscribe(res => {
      this.documents = res;
      
      console.log(this.documents.payload)
    });

   
    updateProgram(form: any, item: any) {
      console.log(form.value)
     
        this._documentService.updateCategoryDocument(item.payload.doc.data().id, form.value)
        .then(
          res => {
            this.selectedIndex = null
            this.showAction = false
            this._snackBar.open("Updated Successfully", "Thanks", {
              duration: 3000
            });
          
            this.router.navigate(['/dashboard/categories'])
          }
        )
      
    }

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
