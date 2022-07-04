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
  selector: 'app-meditation-list',
  templateUrl: './meditation-list.component.html',
  styleUrls: ['./meditation-list.component.scss']
})
export class MeditationListComponent implements OnInit {
  
  p: number = 1;
  collection = [{
      
      
    "firstName": "01",
    "lastName": "Ipsum",
    "userName": "LoremIpsum",
    "email": "LoremIpsum@lorem"

},
{


"firstName": "02",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "03",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "04",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "05",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "06",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "07",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "08",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "09",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "10",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "11",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "12",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "13",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "14",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "15",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

},{


"firstName": "16",
"lastName": "Ipsum",
"userName": "LoremIpsum",
"email": "LoremIpsum@lorem"

}

];

documents: any;
id: any;
constructor( private _documentService : DocumentService,private _snackbar: MatSnackBar, private router: Router, private AuthenticationService: AuthenticationService) {}

ngOnInit(): void {

  this.getDocumentList();
}

getDocumentList = () =>
this._documentService
  .GetDocumentMeditationList()
  .subscribe(res => {
    this.documents = res;
    console.log(this.documents.payload)
  });

  deleteDocument = data => this._documentService.DeleteDocument(data);

}
