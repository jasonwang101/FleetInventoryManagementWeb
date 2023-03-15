import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FleetListComponent } from './fleet-list/fleet-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataQueryService } from './services/data-query.service';
import { FleetComponent } from './fleet/fleet.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FleetListComponent,
    FleetComponent,
    CustomerListComponent,
    CustomerComponent,
    VehicleListComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    DataQueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
