import { Person } from "../../models/person";
import { ServiceContract } from "../../models/servicecontract";

export class PeopleService implements ServiceContract {
    private peopleRecords: Person[] = [
        {
            id: 1,
            name: 'anil',
            salary: 1000
        },
        {
            id: 2,
            name: 'sunil',
            salary: 2000
        }
    ]

    getAll() {
        return this.peopleRecords
    }
}