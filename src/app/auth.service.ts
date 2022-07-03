import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";

import {
    MatSnackBar
  } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import {
    Router
  } from '@angular/router';
@Injectable({
providedIn: 'root'
})
 
export class AuthenticationService {
userData: Observable<firebase.User>;
 
constructor(private angularFireAuth: AngularFireAuth, private _snackBar: MatSnackBar, public router: Router ) {
this.userData = angularFireAuth.authState;
}
 

 
/* Sign in */
SignIn(email: string, password: string) {
this.angularFireAuth
//.auth
.signInWithEmailAndPassword(email, password)
.then(res => {
         this._snackBar.open("You are successfully loggedIn", "Thanks", {
            duration: 3000
          });
          this.router.navigate(['/dashboard/home/main'])
})
.catch(err => {
console.log('Something is wrong:',err.message);
this._snackBar.open("Incorrect Credientials", "Please Try again", {
    duration: 3000
  });
});
}
 
/* Sign out */
SignOut() {
this.angularFireAuth
//.auth
.signOut();
}
 
}