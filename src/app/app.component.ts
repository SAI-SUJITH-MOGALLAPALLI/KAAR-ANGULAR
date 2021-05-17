import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';
import { LoaderService } from './service/authentication/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer Portal';
  constructor(public authenticationService: AuthenticationService,public loaderService:LoaderService) { }

  logout() {
    // console.log(this.authenticationService.login);
    this.authenticationService.logout();
  }
  
}
