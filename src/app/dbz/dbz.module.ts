import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { NuevoComponent } from './nuevo/nuevo.component';

import { DbzService } from './services/dbz.service';

//Nota: los providers son todos aquellos servicios que serán
//usados dentro de la aplicación.

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    NuevoComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    DbzService
  ]
})
export class DbzModule { }