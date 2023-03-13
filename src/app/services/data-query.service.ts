import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Fleet } from '../models/fleet';
import { Query } from '../models/query';

@Injectable({
  providedIn: 'root'
})
export class DataQueryService {
  constructor(private apollo: Apollo) { }

  GetAllCustomers(): Observable<Customer[]> {
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

  GetCustomers(customerId: number): Observable<Customer[]> {
    return this.apollo.watchQuery<Query>({
      query: gql`
        query customers {
          customers (where: { customerId: { eq : ${customerId} } })
          {
            fleets
            {
              fleetId,
              name
            }
          }
        }
      `
    })
    .valueChanges
    .pipe(
      map(result => result.data.customers)
    );
  }

  GetFleets(fleetId: number): Observable<Fleet[]> {
    return this.apollo.watchQuery<Query>({
      query: gql`
        query fleets {
          fleets (where: { fleetId: { eq : ${fleetId} } })
          {
            vehicles
            {
              name,
              make,
              model
            }
          }
        }
      `
    })
    .valueChanges
    .pipe(
      map(result => result.data.fleets)
    );
  }
}