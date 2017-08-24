import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {CustomerService, Customer } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  custId: number;
  cust: Customer;

  constructor(private router: Router, private activatedRoute: ActivatedRoute
    , private filmService: CustomerService) { }

  ngOnInit() {
    this.custId = parseInt(this.activatedRoute.snapshot.params.custId);
    this.filmService.getCustomerDetail(this.custId)
      .then((result) => {
        this.cust = result;
      }).catch((error) => {
      console.error('>>>> error = ', error);
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}
