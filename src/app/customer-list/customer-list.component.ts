import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { DataQueryService } from '../services/data-query.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  customers?: Observable<Customer[]>;
  
  constructor(private dataQueryService: DataQueryService) {}

  ngOnInit()
  {
    this.customers = this.dataQueryService.GetAllCustomers();
  }
}
