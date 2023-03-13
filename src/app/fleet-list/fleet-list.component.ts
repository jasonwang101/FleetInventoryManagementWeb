import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { DataQueryService } from '../services/data-query.service';

@Component({
  selector: 'app-fleet-list',
  templateUrl: './fleet-list.component.html',
  styleUrls: ['./fleet-list.component.css']
})
export class FleetListComponent {
  customers?: Observable<Customer[]>;

  constructor(private dataQueryService: DataQueryService) {}
}