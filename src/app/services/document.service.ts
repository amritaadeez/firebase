import { Injectable } from '@angular/core';
import { Document } from '../_model/document';
import { AngularFirestore } from "@angular/fire/firestore";
import {
  MatSnackBar
} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})

export class DocumentService {

  constructor(private firestore: AngularFirestore, private _snackbar: MatSnackBar) {}

  /* Add Document */
  AddDocument(document) {
    console.log(document)
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("categories").add(document)
        .then(res => {
          resolve(res);
          this._snackbar.open("Added Successfully", "Thanks", {
            duration: 3000
          });
        }, err => reject(err));
    });
  }

  AddProgramsDocument(document) {
    console.log(document)
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("programs").add(document)
        .then(res => {
          resolve(res);
          this._snackbar.open("Added Successfully", "Thanks", {
            duration: 3000
          });
        }, err => reject(err));
    });
  }

  // /* Get Document */
  // GetDocument(id: string) {
  //   return this.firestore.collection("documents").doc(id).snapshotChanges();
  // }  

  /* Get Document list */
  GetDocumentCategoriesList() {
    return this.firestore.collection("categories").snapshotChanges();
  }
  GetDocumentProgramsList() {
    return this.firestore.collection("programs").snapshotChanges();
  }
  GetDocumentMeditationList() {
    return this.firestore.collection("meditations").snapshotChanges();
  }

  GetintroQuesList(id: string) {
    return this.firestore.collection("questions/"+id+'/options').valueChanges();
  }

  Getaudios(id: string) {
    return this.firestore.collection("meditations/"+id+'/audios').valueChanges();
  }
  GetDocumentQuestionList() {
    return this.firestore.collection("questions").snapshotChanges();
  }
  GetDocumentUserList() {
    return this.firestore.collection("users").snapshotChanges();
  }
  GetQuestionsDocument() {
    return this.firestore.collection("questions").snapshotChanges();
  } 
  GetUserDocument(id: string) {
    return this.firestore.collection("users").doc(id).snapshotChanges();
  }  

 

  // /* Update Document */
  updateDocument(userKey, value){
    return this.firestore.collection('documents').doc(userKey).set(value);
  }

  updateProgramDocument(userKey, value){
    return this.firestore.collection('programs').doc(userKey).set(value);
  }

  updateCategoryDocument(userKey, value){
    return this.firestore.collection('categories').doc(userKey).set(value);
  }

  updateUserDocument(userKey, value){
    return this.firestore.collection('users').doc(userKey).set(value);
  }

  // /* Delete Document */
  DeleteDocument(data) {
    return this.firestore.collection("documents").doc(data.payload.doc.id)
      .delete();
  }

  DeleteCategory(data) {
    return this.firestore.collection("categories").doc(data.payload.doc.id)
      .delete();
  }
  DeleteProgram(data) {
    return this.firestore.collection("programs").doc(data.payload.doc.id)
      .delete();
  }
  DeleteUser(data) {
    return this.firestore.collection("users").doc(data.payload.doc.id)
      .delete();
  }
}