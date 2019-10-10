import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';


const routes: Routes = [
    {path: '', component: ContactListComponent} //Componente por defecto cuando lleguemos a la ruta
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] //ojo que ahora es forChild y no forRoot
})

export class ContactsRoutingModule {}