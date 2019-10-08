import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../people.service';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, OnDestroy {


  constructor(
    private peopleService: PeopleService,
    ) { }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    console.log('In method on PeopleListCOmponent destroy')
  }

}
