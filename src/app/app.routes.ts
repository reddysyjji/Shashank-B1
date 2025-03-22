import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExistingCustomerComponent } from './existing-customer/existing-customer.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home Page
  { path: 'existing', component: ExistingCustomerComponent },
  { path: 'new', component: NewUserComponent },
  { path: 'dummy', component: HomeComponent }, // Updated to use AppComponent
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })], // Enable tracing
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
