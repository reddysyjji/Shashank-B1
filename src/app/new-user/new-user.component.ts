import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-user',
  standalone: true, // If you're using standalone components
  imports: [FormsModule, RouterModule], 
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  fullName: string = '';
  phoneNumber: string = '';
  message: string = '';

  // ✅ Add Router correctly in the constructor
  constructor(private router: Router) {}

  registerUser() {
    if (this.fullName && this.phoneNumber) {
      localStorage.setItem(this.phoneNumber, this.fullName);
      this.message = `User ${this.fullName} registered successfully!`;
    } else {
      this.message = 'Please enter both name and phone number.';
    }
  }

  goHome() {
    console.log("Navigating to home...");
    
    // ✅ Reset navigation workaround to force refresh
    this.router.navigateByUrl('/dummy', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']).then(() => {
        console.log("Navigation successful!");
      });
    }).catch(err => console.error("Navigation error:", err));
  }
}
