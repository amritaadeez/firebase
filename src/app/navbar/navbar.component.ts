import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd
} from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userInfo: any;
  userInfoPhoto: any;
 

  constructor( private apiService: ApiserviceService, public router: Router) { }

  ngOnInit(): void { 
    this.userInfo = localStorage.getItem("user_name");
    this.userInfoPhoto = localStorage.getItem("photo_url");
    console.log(this.userInfo)

  }


  
  logout() {
   this.router.navigate(['/'])
   localStorage.clear()
  }


}
