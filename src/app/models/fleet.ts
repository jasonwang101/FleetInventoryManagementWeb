import { Vehicle } from "./vehicle";

export type Fleet = 
{
    fleetId: number;
    name?: string;
    description?: string;
    customerId: string;
    vehicles: Vehicle[];
}