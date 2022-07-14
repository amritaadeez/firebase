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
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {

  p: number = 1;
  filePresent: any;
  documents: any;
  id: any;
  selectedData: any
  showAction: boolean;
  categoryName: any
  editDocumentForm:FormGroup;

  constructor(
    private route : ActivatedRoute,
    private _documentService : DocumentService,  private _snackBar: MatSnackBar, public dialog: MatDialog , private router: Router, private AuthenticationService: AuthenticationService) { 
      this.editDocumentForm = new FormGroup ({
        title: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        background_image: new FormControl (null),

      });
  
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    // this.getDocument();

    this.AuthenticationService.dataTransfer.subscribe(
      data => {

        if (!data) {
          this.router.navigate(['/dashboard/programs'])
        } else {
          this.selectedData = data
          this.filePresent = this.selectedData.payload.doc.data().background_image
          this.categoryName = this.selectedData.payload.doc.data().title
        }
      }
    )

    console.log(this.selectedData)
    this.getDocumentList();
  }

  public files: NgxFileDropEntry[] = [];
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          let isFileAllowed = false;
          const allowedFiles = ['.png'];
          const regex = /(?:\.([^.]+))?$/;
          const extension = regex.exec(file.name);
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

          if (undefined !== extension && null !== extension) {
            for (const ext of allowedFiles) {
              if (ext === extension[0]) {
                isFileAllowed = true;
                this.filePresent = file

              } else {
                this._snackBar.open('Please Upload again', 'Only image file is allowed', {
                  duration: 3000
                });
                isFileAllowed = false;
              }
            }
          } else {
            this._snackBar.open('Please Upload again', 'Only image file is allowed', {
              duration: 3000
            });
            isFileAllowed = false;

          }

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }


  // getDocument() {
  //   // this._documentService.get(this.id)
  //   .subscribe(res => {
  //     // this.editDocumentForm.controls['title'].setValue (res.payload.data()['title']);
  //     // this.editDocumentForm.controls['description'].setValue (res.payload.data()['description']);
  //     // this.editDocumentForm.controls['author'].setValue (res.payload.data()['author']);
  //   });  
  // }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }

  getDocumentList = () =>
this._documentService
  .GetDocumentProgramsList()
  .subscribe(res => {
    this.documents = res;
    this.editDocumentForm.controls['title'].setValue(this.categoryName);
    this.editDocumentForm.controls['background_image'].setValue(this.filePresent);
    console.log(this.documents.payload)
  });

  updateProgram(form: any) {
    console.log(form.value)
   console.log(this.selectedData.payload.doc.id)
      this._documentService.updateProgramDocument(this.selectedData.payload.doc.id, form.value)
      .then(
        res => {
          this._snackBar.open("Updated Successfully", "Thanks", {
            duration: 3000
          });
          this.router.navigate(['/dashboard/programs'])
        }
      )
    
  }

  
  openDialog() {
    console.log(this.selectedData)
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
       data: {
        items: this.selectedData
       },
     });
 
     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed', result);
       if (result.event == "Proceed") {
       this._documentService.DeleteProgram(result.data.items);
       this.router.navigate(['/dashboard/programs'])
       } else {
 
       }
     });
   }

  deleteDocument = data => this._documentService.DeleteProgram(data);

  editAction(data: any){
  
    this.showAction = false
    this.filePresent = data.payload.doc.data().background_image
    this.categoryName = data.payload.doc.data().title
    this.editDocumentForm.controls['title'].setValue(this.categoryName);
    this.editDocumentForm.controls['background_image'].setValue(this.filePresent);
   
  }
  cancelAction(){
    this.showAction = false
  }

 
}
