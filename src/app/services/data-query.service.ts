import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable, ReplaySubject } from 'rxjs';
import { Customer } from '../models/customer';
import { Fleet } from '../models/fleet';
import { Query } from '../models/query';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class DataQueryService {
  private customerId = new ReplaySubject<number>();
  private fleetId = new ReplaySubject<number>();

  customerId$ = this.customerId.asObservable();
  fleetId$ = this.fleetId.asObservable();
  
  customerName?: string

  constructor(private apollo: Apollo) { }

  GetCustomers(): Observable<Customer[]> {
    return this.apollo.watchQuery<Query>({
      query: gql`
        query customers {
          customers
          {
            customerId,
            name
          }
        }
      `
    })
    .valueChanges
    .pipe(
      map(result => result.data.customers)
    );
  }

  GetFleets(customerId: number): Observable<Fleet[]> {
    return this.apollo.watchQuery<Query>({
      query: gql`
        query fleets {
          fleets (where: { customerId: { eq : ${customerId} } })
          {
            fleetId,
            name
          }
        }
      `
    })
    .valueChanges
    .pipe(
      map(result => result.data.fleets)
    );
  }

  GetVehicles(fleetId: number): Observable<Vehicle[]> {
    return this.apollo.watchQuery<Query>({
      query: gql`
        query vehicles {
          vehicles (where: { fleetId: { eq : ${fleetId} } })
          {
            vehicleId,
            name,
            make,
            model,
            color
          }
        }
      `
    })
    .valueChanges
    .pipe(
      map(result => result.data.vehicles)
    );
  }

  SetCustomerId(customerId: number)
  {
    this.customerId.next(customerId);
  }

  SetCustomerName(customerName: string)
  {
    this.customerName = customerName;
  }

  SetFleetId(fleetId: number)
  {
    this.fleetId.next(fleetId);
  }
}