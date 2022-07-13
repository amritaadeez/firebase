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
@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss']
})
export class ProgramsListComponent implements OnInit {

  collection = [{
      
      
    "firstName": "01",
    imageurl: "assets/categories/cat-1.png",
    "userName": "LoremIpsum",
    "email": "10"

},
{


"firstName": "02",
imageurl: "assets/categories/cat-2.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "03",
imageurl: "assets/categories/cat-3.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "04",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "05",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "06",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "07",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "08",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "09",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "10",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "11",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "12",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "13",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "14",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "15",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

},{


"firstName": "16",
imageurl: "assets/categories/cat-1.png",
"userName": "LoremIpsum",
"email": "10"

}

];

p: number = 1;
showAction: boolean;

documents: any;
id: any;
constructor( private _documentService : DocumentService,private _snackbar: MatSnackBar, private router: Router, private AuthenticationService: AuthenticationService) {}

ngOnInit(): void {

  this.getDocumentList();
}

changeRoute(data: any) {
  this.AuthenticationService.dataTransfer.next(data)
  this.router.navigate(['/dashboard/program-detail'])
}

getDocumentList = () =>
this._documentService
  .GetDocumentProgramsList()
  .subscribe(res => {
    this.documents = res;
    console.log(this.documents.payload)
  });

  deleteDocument = data => this._documentService.DeleteDocument(data);

}


