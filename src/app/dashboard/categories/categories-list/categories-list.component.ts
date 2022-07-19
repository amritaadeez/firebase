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
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import {
  AuthenticationService
} from 'src/app/auth.service';
import { map, finalize } from "rxjs/operators";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { DocumentService } from './../../../services/document.service';
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  filePresent: any;
  addDocumentForm:FormGroup;
  downloadURL: Observable<string>;
  fb: string;
  spiner:boolean = false

p: number = 1;
  showAction: boolean;
 
  documents: any;
  id: any;
  selectedIndex: any
  editDocumentForm:FormGroup;

  constructor(  private _snackBar: MatSnackBar, private storage: AngularFireStorage, private _documentService : DocumentService, public dialog: MatDialog, private _snackbar: MatSnackBar, private router: Router, private AuthenticationService: AuthenticationService) {
    this.editDocumentForm = new FormGroup ({
      title: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
      background_image: new FormControl (null),

    });
  }

  ngOnInit(): void {
   
    this.getDocumentList();
  }

  openDialog(datas: any, text: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
       data: {
        items: datas,
        text: text
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

   onFileSelected(event) {
    this.spiner = true
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
              
            }
            this.spiner = false
            this.filePresent = file
            console.log(this.fb, file.name);
           
            this.editDocumentForm.controls['background_image'].setValue(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  getDocumentList = () =>
  this._documentService
    .GetDocumentCategoriesList()
    .subscribe(res => {
      this.documents = res;
      
      console.log(this.documents)
    });
    
    updateProgram(form: any, item: any) {
      console.log(form.value)
      console.log(item.payload.doc.id, "this.selectedData.payload.doc.id")
        this._documentService.updateCategoryDocument(item.payload.doc.id, form.value)
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
