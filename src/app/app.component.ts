import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';
import { LoaderService } from './service/authentication/loader/loader.service';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer Portal';
  constructor(private titleService:Title,private breadcrumbService: BreadcrumbService,public authenticationService: AuthenticationService,public loaderService:LoaderService) { }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbChanged.subscribe( crumbs => {
      this.titleService.setTitle(this.createTitle(crumbs));
    })
  }

  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'Portal';
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) { return title; }

    const routeTitle = this.titlesToString(titles);
    return `${routeTitle} ${title}`;
  }

  private titlesToString(titles) {
      return titles.reduce((prev, curr) => {
          return `${curr.displayName} - ${prev}`;
      }, '');
  }
  logout() {
    // console.log(this.authenticationService.login);
    this.authenticationService.logout();
  }
  
}
