import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleRoutingModule } from './people-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { PeopleDataResolver } from './people-data-resolver';



@NgModule({
  declarations: 
  [PersonDetailsComponent, 
    PeopleListComponent, OverviewComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  providers: [PeopleDataResolver]
})
export class PeopleModule { }
