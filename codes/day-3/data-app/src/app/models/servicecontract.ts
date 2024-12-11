import { Person } from "./person";

export interface ServiceContract {
    getAll(): Person[];
}