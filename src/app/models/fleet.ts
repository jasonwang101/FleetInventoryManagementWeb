import { Vehicle } from "./vehicle";

export type Fleet = 
{
    fleetId: string;
    name?: string;
    description?: string;
    customerId: string;
    vehicles: Vehicle[];
}