import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
<<<<<<< HEAD
import { AuthenticationService } from 'src/app/auth.service';
=======
import { AuthenticationService } from 'src/app/auth.service';
>>>>>>> merge

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  spinner: boolean;
  submitted: boolean;
  resetLink: any;

<<<<<<< HEAD
  constructor(private apiService: ApiserviceService, private AuthenticationService: AuthenticationService,  private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    public router: Router, public dialog: MatDialog) {

      /* this.AuthenticationService.resetUrl.subscribe(
=======
  constructor(private apiService: ApiserviceService, private AuthenticationService: AuthenticationService,  private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    public router: Router, public dialog: MatDialog) {

      this.AuthenticationService.resetUrl.subscribe(
>>>>>>> merge
        (data: any) => {
          
          this.resetLink = data
        }
<<<<<<< HEAD
      ); */
=======
      );
>>>>>>> merge

    
    this.resetForm = this.formBuilder.group({
      password: ['',
        [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]
      ],
      cpassword: ['',
        [Validators.required]
      ],
    });
   }


   get resetGetter() {
    return this.resetForm.controls;
  }

  ngOnInit(){
  
  }
  


  resetPassword(data: any) {
    
    this.spinner = true;
    this.submitted = true;
    if (this.resetForm.invalid) {
      this.spinner = false;
      // this.submitted = false;
      return;
    } else {
      if (data.password === data.cpassword) {

        this.apiService.resetPassword(data, this.resetLink).subscribe(
          (response: any) => {
            this.spinner = false
            
            this._snackBar.open("Set password Successfully", "Thanks");
            this.router.navigate(["/"])
  
          }, (error: any) => {
            this.spinner = false
            
            
            this._snackBar.open(error.error.message, "Try Again");
  
          }
        );
        } else {
          this._snackBar.open("Confirm password should be same as password", "Ok");
          this.resetForm.controls.cpassword.reset()
          this.spinner = false
        }
    }

  }

}
