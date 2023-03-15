import { Component, Input } from '@angular/core';
import { Fleet } from '../models/fleet';
import { DataQueryService } from '../services/data-query.service';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent {
  @Input() fleet?: Fleet;

  constructor(private dataQueryService: DataQueryService) {}

  onClick()
  {
    if (this.fleet)
    {
      this.dataQueryService.SetFleetId(this.fleet.fleetId);
    }
  }
}
