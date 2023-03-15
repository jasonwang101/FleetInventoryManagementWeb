import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Vehicle } from '../models/vehicle';
import { DataQueryService } from '../services/data-query.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent {
  vehicles?: Observable<Vehicle[]>;
  subscription?: Subscription;

  constructor(private dataQueryService: DataQueryService) {}

  ngOnInit()
  {
    this.subscription = this.dataQueryService.fleetId$.subscribe(
      item => 
      {
        this.vehicles = (item == -1) ? undefined : this.dataQueryService.GetVehicles(item);
      }
    );
  }

  ngOnDestroy()
  {
    this.subscription?.unsubscribe();
  }
}
