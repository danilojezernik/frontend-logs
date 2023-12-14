import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {SharedServiceService} from "./services/shared-service/shared-service.service";

const routesToShowGoBack: string[] = ['/blog-pregled', '/blog/edit/:id', '/mediji-pregled', '/email-pregled', '/events-pregled', '/subscribers', '/newsletter-pregled', '/review-pregled'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  shouldShowGoBack: boolean = true;
  shouldShowHeader: boolean = true; // Add this flag

  constructor(private router: Router, public sharedService: SharedServiceService) {
  }

  ngOnInit() {
    // Subscribe to router events to determine when to show the "Go Back" button
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Check if the current route is in the array of routes to show the "Go Back" button
      this.shouldShowGoBack = routesToShowGoBack.includes(this.router.url);
      this.shouldShowHeader = this.router.url !== '/';
    });
  }

}
