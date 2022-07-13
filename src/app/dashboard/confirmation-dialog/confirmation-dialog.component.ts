import {
  Component,
  OnInit
} from '@angular/core';
import {
  Inject
} from '@angular/core';
import {
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {
  MatDialogRef
} from '@angular/material/dialog';
@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  items : any

  constructor(public dialogRef: MatDialogRef < ConfirmationDialogComponent > , @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)

    this.items = data
  }

  ngOnInit(): void {}
  onNoClick(value: any): void {
    if (value == "YES") {
      this.dialogRef.close({event:'Proceed', data: this.items});
    } else {
      this.dialogRef.close({event:'Cancel',  data: ""});
    }
  }
}
