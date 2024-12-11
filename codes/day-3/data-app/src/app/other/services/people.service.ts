import { Injectable } from "@angular/core";
import { Person } from "../../models/person";
import { ServiceContract } from "../../models/servicecontract";
import { AnotherService } from "./another.service";

@Injectable()
export class PeopleService implements ServiceContract {

    constructor(private another: AnotherService) {

    }
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
    getAppTitle(): string {
        return this.another.getTitle()
    }
}