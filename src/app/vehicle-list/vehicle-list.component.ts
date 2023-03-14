import { Component } from '@angular/core';
import { DataQueryService } from '../services/data-query.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent {
  constructor(private dataQueryService: DataQueryService) {}
  
}
