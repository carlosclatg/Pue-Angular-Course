import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { OverviewComponent } from './overview/overview.component';
import { PeopleDataResolver } from './people-data-resolver';

const routes: Routes = [
    //{path: 'people/:personId' , component: PersonDetailsComponent}, es lo mismo que 

    {path: 'people', 
        component: PeopleListComponent,
        children: [ //al tener rutas hijas tiene que haber un router-outlet dentro de este compo.
            {   path:':personId' , 
                component: PersonDetailsComponent,
                resolve: {
                    person: PeopleDataResolver //Obtener a partir de PEopleDataREsolver el parametro person.
                }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] //ojo que ahora es forChild y no forRoot
})

export class PeopleRoutingModule {}