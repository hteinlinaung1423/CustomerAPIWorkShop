import { Component, OnInit } from '@angular/core';
import { CustomerService , Customer } from '../customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  custs: Customer[] = [];

  constructor(private filmService: CustomerService) { }

  ngOnInit() {
    this.filmService.getCustomers()
      .then((custs) => {
        this.custs = custs;
      })
      .catch((error) => {
        console.error('error: ', error);
      });
  }

}
