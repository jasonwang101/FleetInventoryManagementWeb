import { Fleet } from "./fleet";

export type Customer =
{
    customerId: number;
    name?: string;
    fleets: Fleet[];
}