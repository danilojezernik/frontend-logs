import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  /**
   * Method to log the user in by making a login request.
   * Calls the AuthService's login method and handles the response.
   */
  logIn() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Store the access token
        this.authService.setAccessToken(response.access_token);

        // Redirect to admin route after successful login
        this.router.navigate(['login']);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
