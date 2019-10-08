import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleModule } from './people/people.module';

const routes: Routes = [  
  {path: '' , redirectTo: '/home', pathMatch: 'full'}, //path
  {path: 'home' , component: HomeComponent },
  {path: 'about' , component: AboutComponent },   //la props principales son el path y component, hace match de path y muestra comp
  {path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [ //Componentes a importar
    AppComponent,
    HomeComponent,
    AboutComponent, 
    NotFoundComponent
  ],
  imports: [ //Modulos a importar, un componente solo puede estar en un modulo.
    BrowserModule,
    PeopleModule, //los modulos con rutas propias tienen que ir antes del modulo raiz
    RouterModule.forRoot(routes),
  ],
  providers: [], //servicios.
  bootstrap: [AppComponent] //Componente a levantar en 1 instancia.
})
export class AppModule { }
