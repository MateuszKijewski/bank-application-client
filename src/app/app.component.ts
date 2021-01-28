import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bank-api-client';

  async ngOnInit() {
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationStart) {
        var loggedIn = await this.isLoggedIn();
        if(!loggedIn) {
          console.log("UNAUTHORIZED");
          this.router.navigate(['/login']);
        }
        else {
          console.log("AUTHORIZED");
        }
      }
    })
  }
  constructor(private router: Router, private authService: AuthService) { }      

  private async isLoggedIn(): Promise<boolean> {
    return await this.authService.checkIfAuthorized();
  }
}
