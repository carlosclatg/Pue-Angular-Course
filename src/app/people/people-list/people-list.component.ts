import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, OnDestroy {


  constructor(
    private peopleService: PeopleService,  public activeRoute: ActivatedRoute
    ) { }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    console.log('In method on PeopleListCOmponent destroy')
  }

}
