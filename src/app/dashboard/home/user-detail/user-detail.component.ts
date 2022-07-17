import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import {
  Router,ActivatedRoute
} from '@angular/router';
import {
  AuthenticationService
} from 'src/app/auth.service';
import { DocumentService } from './../../../services/document.service';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  spin: boolean;
  filePresent(filePresent: any) {
    throw new Error('Method not implemented.');
  }
  selectedData: any
  showAction: boolean;
  categoryName: any
  editDocumentForm:FormGroup;
  documents: any;
  firstName: any;
  lastName: any;
  userName: any;
  email: any;

  constructor(
    private route : ActivatedRoute,
    private _documentService : DocumentService,  private _snackBar: MatSnackBar, public dialog: MatDialog , private router: Router, private AuthenticationService: AuthenticationService) { 
      this.editDocumentForm = new FormGroup ({
        first_name: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        last_name: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        username: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        email: new FormControl (null, [Validators.required])
      });
  
    }

  ngOnInit(): void {

    this.AuthenticationService.dataTransfer.subscribe(
      data => {
        if (!data) {
          this.router.navigate(['/dashboard/home/main'])
        } else {
          this.selectedData = data
          this.firstName = this.selectedData.payload.doc.data().first_name
          this.lastName = this.selectedData.payload.doc.data().last_name
          this.userName = this.selectedData.payload.doc.data().username
          this.email = this.selectedData.payload.doc.data().email
        }
      }
    )

    this.getDocumentList();
  }

  getDocumentList = () =>
  this._documentService
    .GetDocumentUserList()
    .subscribe(res => {
      this.documents = res;
      this.editDocumentForm.controls['first_name'].setValue(this.firstName);
      this.editDocumentForm.controls['last_name'].setValue(this.lastName);
      this.editDocumentForm.controls['username'].setValue(this.userName);
      this.editDocumentForm.controls['email'].setValue(this.email);
      console.log(this.documents.payload)
    });
  
    updateProgram(form: any) {
      console.log(form.value)
      this.spin =true
      console.log(this.selectedData.payload.doc.id, "this.selectedData.payload.doc.id")
        this._documentService.updateUserDocument(this.selectedData.payload.doc.id, form.value)
        .then(
          res => {
            this.spin = false
            this._snackBar.open("Updated Successfully", "Thanks", {
              duration: 3000
            });
            this.router.navigate(['/dashboard/home/main'])
          }
        )
      
    }
}
