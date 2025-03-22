import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-existing-customer',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './existing-customer.component.html',
  styleUrls: ['./existing-customer.component.css']
})
export class ExistingCustomerComponent {
  phoneNumber: string = '';
  customerName: string = '';
  message: string = '';

  constructor(private router: Router) {}

  findCustomer() {
    const storedName = localStorage.getItem(this.phoneNumber);
    if (storedName) {
      this.customerName = storedName;
      this.message = `Welcome back ${this.customerName}!`;
    } else {
      this.message = 'Customer not found.';
    }
  }

  goHome() {
    console.log("Navigating to home...");
    
    // ✅ Force refresh navigation workaround
    this.router.navigateByUrl('/dummy', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']).then(() => {
        console.log("Navigation successful!");
      });
    }).catch(err => console.error("Navigation error:", err));
  }
}
