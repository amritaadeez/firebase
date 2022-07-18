import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import { map, finalize } from "rxjs/operators";
import { DocumentService } from './../../../services/document.service';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.scss']
})
export class CreateNewCategoryComponent implements OnInit {
  filePresent: any;
  addDocumentForm:FormGroup;
  downloadURL: Observable<string>;
  fb: string;
  constructor(private _snackBar: MatSnackBar, private storage: AngularFireStorage, private _documentService : DocumentService,
    private router : Router) { }

  ngOnInit(): void {
    this.addDocumentForm = new FormGroup ({
      title: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
      background_image: new FormControl (null),
  
    })
  }

  onFileSelected(event) {
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
            console.log(this.fb);
            this.addDocumentForm.controls['background_image'].setValue(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
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

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }
  submitDocument(form):void{
    this._documentService.AddDocument(form.value);
    this.router.navigate(['/dashboard/categories']);
  }

}
