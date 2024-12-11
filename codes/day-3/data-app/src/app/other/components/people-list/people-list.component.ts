import { Component, Inject } from '@angular/core';
import { Person } from '../../../models/person';
import { PeopleService } from '../../services/people.service';
import { ServiceContract } from '../../../models/servicecontract';
import { TOKEN_NAME } from '../../../utils/constants';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css',
  providers: []
})
export class PeopleListComponent {
  //people = ['anil', 'sunil']
  people: Person[];

  private ps: ServiceContract;

  constructor(@Inject(TOKEN_NAME) ps: ServiceContract) {
    this.ps = ps
    //const ps = new PeopleService()
    this.people = this.ps.getAll()

  }
}
