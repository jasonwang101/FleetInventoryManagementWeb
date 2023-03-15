import { Component, Input } from '@angular/core';
import { Customer } from '../models/customer';
import { DataQueryService } from '../services/data-query.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  @Input() customer?: Customer;

  constructor(private dataQueryService : DataQueryService) {}

  onClick()
  {
    if (this.customer)
    {
      this.dataQueryService.customerName = this.customer.name;
      this.dataQueryService.SetCustomerId(this.customer.customerId);
      this.dataQueryService.SetFleetId(-1);
    }
  }
}
