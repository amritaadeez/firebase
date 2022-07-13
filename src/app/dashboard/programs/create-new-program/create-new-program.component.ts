import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-new-program',
  templateUrl: './create-new-program.component.html',
  styleUrls: ['./create-new-program.component.scss']
})
export class CreateNewProgramComponent implements OnInit {

  filePresent: any;
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
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


}
