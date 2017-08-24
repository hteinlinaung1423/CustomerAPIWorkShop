import { Http } from '@angular/http';
import {Injectable} from '@angular/core';

export interface Customer {
  customer_id: number;
  name: string;
  city: string;
  email: string;
  phone: number;

}

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  getCustomerDetail(cid: number): Promise<Customer> {
    const p = new Promise<Customer>((resolve, reject) => {
      this.http.get(`http://localhost:8080/WebApplication1/customer/${cid}`)
        .subscribe(
          (data) => { resolve(data.json()); } ,
          (error) => { reject(error); }
        );
    });
    return (p);
  }

  getCustomers(): Promise<Customer[]> {
    const p = new Promise<Customer[]>((resolve, reject) => {

      this.http.get('http://localhost:8080/WebApplication1/customers')
        .subscribe(
          (result) => {
            resolve(result.json());
          },
          (error) => {
            reject(error);
          }
        );
    });

    return (p);
  }


}
