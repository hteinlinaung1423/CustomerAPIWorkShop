import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';

import { CustomerComponent } from './components/customer.component';
import { CustomerDetailComponent } from './components/customer-detail.component';
import {CustomerService} from './customer.service';

const appRoute: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'customer/:custId', component: CustomerDetailComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
