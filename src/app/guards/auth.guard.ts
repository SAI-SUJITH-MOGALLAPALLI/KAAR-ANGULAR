import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(localStorage.getItem("uname")==null){
        if(localStorage.getItem("portal")=="customer")
        this.router.navigate([''])
        else if(localStorage.getItem("portal")=="vendor")
        this.router.navigate(['vendorlogin'])
        return false;
      }
      else{
        return true;
      }
      if (this.authenticationService.isAuthenticated) {
        return true;
      }
      console.log(this.router.getCurrentNavigation());
      console.log('Load'+this.authenticationService.login);
      if(this.authenticationService.login==true)
      return true;
      console.log('Loading');
      this.router.navigate(['']);
      return false;
  }
  
}
