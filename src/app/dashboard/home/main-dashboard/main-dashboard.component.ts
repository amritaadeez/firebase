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
import {
  AuthenticationService
} from 'src/app/auth.service';
import { DocumentService } from './../../../services/document.service';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  color = 'accent';
  checked = false;
  disabled = false;
  graphShown: any;
  term: any
  legend: boolean = true;
  legendPosition: string = 'below';
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Values';
  timeline = true;
  doughnut = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  wifiarray: Array < any > = []

  currentDate = new Date()

  Object = Object;

  //pie
  showLabels = true;
  // showLine : any[]


  saleData: any[]


  saleDataPie = [

  ];

  p: number = 1;

 

  

  documents: any;
  id: any;
  constructor(private apiService: ApiserviceService, private _documentService : DocumentService, public dialog: MatDialog, private _snackbar: MatSnackBar, private router: Router, private AuthenticationService: AuthenticationService) {}

  ngOnInit(): void {
    console.log("username")
    this.getDocumentList();
    // localStorage.setItem("user_details" , user)
  }


  openDialog(item: any, text: any) {

    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
       data: {
        items: item,
        text: text
       },
     });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result.event == "Proceed") {
      this._documentService.DeleteUser(result.data.items);
      this._snackbar.open("Deleted Successfully", "Thanks", {
        duration: 3000
      });
      } else {

      }
    });
  }

  getDocumentList = () =>
  this._documentService
    .GetDocumentUserList()
    .subscribe(res => {
      this.documents = res;
      console.log("username", this.documents)
    });

    changeRoute(data: any) {
      this.AuthenticationService.dataTransfer.next(data)
      this.router.navigate(['/dashboard/home/user-detail'])
    }

}
