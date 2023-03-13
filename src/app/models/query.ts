import { Customer } from "./customer";
import { Fleet } from "./fleet";
import { Vehicle } from "./vehicle";

export type Query = 
{
    customers: Customer[];
    fleets: Fleet[];
    vehicles: Vehicle[];
}