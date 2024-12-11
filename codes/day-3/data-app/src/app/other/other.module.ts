import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleService } from './services/people.service';
import { SERVICE_NAME, TOKEN_NAME } from '../utils/constants';

@NgModule({
  declarations: [
    PeopleListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PeopleListComponent],
  providers: [
    //PeopleService,
    // {
    //   provide: PeopleService,
    //   useClass: PeopleService
    // },
    {
      provide: TOKEN_NAME,
      useClass: SERVICE_NAME
    }
  ]
})
export class OtherModule { }