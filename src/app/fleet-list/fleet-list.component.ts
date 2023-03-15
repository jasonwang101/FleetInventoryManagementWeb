import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Fleet } from '../models/fleet';
import { DataQueryService } from '../services/data-query.service';

@Component({
  selector: 'app-fleet-list',
  templateUrl: './fleet-list.component.html',
  styleUrls: ['./fleet-list.component.css']
})
export class FleetListComponent {
  fleets?: Observable<Fleet[]>;
  customerName?: string;

  subscription?: Subscription;

  constructor(private dataQueryService: DataQueryService) {}

  ngOnInit()
  {
    this.subscription = this.dataQueryService.customerId$.subscribe(
      item => 
      {
        this.fleets = (item == -1) ? undefined : this.dataQueryService.GetFleets(item);
        this.customerName = (item == -1) ? undefined : this.dataQueryService.customerName;
      }
    );
  }

  ngOnDestroy()
  {
    this.subscription?.unsubscribe();
  }
}