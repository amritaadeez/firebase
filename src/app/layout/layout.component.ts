import { Component, Input, OnInit, ViewChild } from '@angular/core';
<<<<<<< HEAD
import { AuthenticationService } from '../auth.service';
=======
import { AuthenticationService } from '../auth.service';
>>>>>>> merge
import { MatAccordion } from '@angular/material/expansion';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  toggle = true;
  showFiller = true;
  activated: any;
  roleAcess: any;
  isAdmin: string;
  isHome: string;
  isCustomer: string;
  isTrasit: string;
  isOffers: string;
  isReports: string;
  isReportsTrxn: string;
  isReportsSearch: string;
  isReportscard: string;
  isSettlement: string;
  isBanners: string;
  isGames: string;
  activeColour: boolean;
  hideSideNav: boolean;
  hideMobileMenu: boolean;
  isCount: string;
 
 @ViewChild(MatAccordion) accordion: MatAccordion;

  isChargeBack: string;
  token: any;

<<<<<<< HEAD
  constructor(private AuthenticationService: AuthenticationService, public dialog: MatDialog,) {
=======
  constructor(private AuthenticationService: AuthenticationService, public dialog: MatDialog,) {
>>>>>>> merge

  }
  ngOnInit(): void {
    

  }
  toggles() {
    this.toggle = !this.toggle
    this.showFiller = !this.showFiller;
  }
  reportsToggle(data: any) {
    this.toggle  = true
    this.showFiller = true;
  }
  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
    this.hideMobileMenu = !this.hideMobileMenu;
  }
  activeClass() {
    this.activated = 'true';
    this.activeColour = !this.activeColour;
  }

}
