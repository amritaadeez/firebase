
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token:any;
  urls: string | null;

  constructor(
    private AuthenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.urls = localStorage.getItem('user_name')
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable < boolean > | Promise < boolean > | boolean {
    const url: string = state.url;  
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.log("sssss", url)
    this.token = localStorage.getItem('user_name');
    if (this.token == null || '' || undefined) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
