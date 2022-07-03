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
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  spinner: boolean;
  submitted: boolean;
  resetLink: any;

<<<<<<< HEAD
  constructor(private apiService: ApiserviceService, private AuthenticationService: AuthenticationService,  private _snackBar: MatSnackBar,
=======
  constructor(private apiService: ApiserviceService, private AuthenticationService: AuthenticationService,  private _snackBar: MatSnackBar,
>>>>>>> merge
    private formBuilder: FormBuilder,
    public router: Router, public dialog: MatDialog) {

    
    this.forgotForm = this.formBuilder.group({
      emailId: ['',
        [Validators.required, Validators.pattern(/(^(.+@.+\..+)$)|(\d{10})/)]
      ]
    });
   }


   get forgotGetter() {
    return this.forgotForm.controls;
  }

  ngOnInit(){
  }
  


  forgotPassword(data: any) {
    
    this.spinner = true;
    this.submitted = true;
    if (this.forgotForm.invalid) {
      this.spinner = false;
      // this.submitted = false;
      return;
    } else {
      this.apiService.forgotPassword(data).subscribe(
        (response: any) => {
          this.spinner = false
          
          this.resetLink = response.reset_link
          this._snackBar.open(response.message, "Thanks", {
            duration: 3000
          });

<<<<<<< HEAD
          //this.AuthenticationService.resetUrl.next(this.resetLink)
=======
          this.AuthenticationService.resetUrl.next(this.resetLink)
>>>>>>> merge

          this.router.navigate(['/reset-password'])
        
        }, (error: any) => {
          this.spinner = false
          
          this._snackBar.open(error.error.message, "Cancel");

        }
      );
    }

  }

}
