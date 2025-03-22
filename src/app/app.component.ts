import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // This makes it a standalone component
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router) {}

  navigateTo(page: string) {
    if (page === 'existing') {
      console.log("Navigating to Existing Customer Page...");
    } else if (page === 'new') {
      console.log("Navigating to New User Page...");
    }
  }
}
