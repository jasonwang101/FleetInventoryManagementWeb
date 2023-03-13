import { Component, Input } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  @Input() customer?: Customer;

  ngOnInit()
  {

  }

  ngOnDestroy()
  {

  }

  onClick(customer?: number)
  {

  }
}
