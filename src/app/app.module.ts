import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes'; // Import Routing
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExistingCustomerComponent } from './existing-customer/existing-customer.component';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ExistingCustomerComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,RouterModule,FormsModule,
    AppRoutingModule // Add AppRoutingModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
