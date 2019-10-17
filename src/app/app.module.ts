import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleModule } from './people/people.module';
import { ContactsModule } from './contacts/contacts.module';
import { CustomRoutePreloader } from './custom-route-preloader';
import { AuthServiceService } from './auth-service.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PeopleService } from './people/people.service';
import { InMemoryDataService } from './in-memory-data.service';

const routes: Routes = [  
  {path: '' , redirectTo: '/home', pathMatch: 'full'}, //path
  {path: 'home' , component: HomeComponent },
  {path: 'about' , component: AboutComponent, canActivate: [AuthGuard] },   //la props principales son el path y component, hace match de path y muestra comp
  {
    path: 'people', 
    loadChildren: () => import('./people/people.module').then( m => m.PeopleModule), //lazy loading
    data: {
      pepePreload: false
    },
    canActivate: [AuthGuard], //solo si estamos logeados
    canLoad: [AuthGuard] //para solo descargar una vez accedemos logeados.
  },
  {
    path: 'contacts', 
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsModule),
    data: {
      pepePreload: true
    },
    canActivate: [AuthGuard],
    canLoad: [AuthGuard] //para solo descargar una vez accedemos logeados.
  },//lazy loading del componente
  {path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [ //Componentes a importar
    AppComponent,
    HomeComponent,
    AboutComponent, 
    NotFoundComponent,
  ],
  imports: [ //Modulos a importar, un componente solo puede estar en un modulo.
    BrowserModule,
    RouterModule.forRoot(routes, {preloadingStrategy: CustomRoutePreloader}),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    //RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}), //manda en primera carga los necesarios y luego los que estan en lazy
  ],
  providers: [CustomRoutePreloader], //servicios.
  bootstrap: [AppComponent] //Componente a levantar en 1 instancia.
})
export class AppModule { }
