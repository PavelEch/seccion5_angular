import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html'
})
export class NuevoComponent {

  @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0
  }


  constructor(private dbzService: DbzService) {

  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregarPersonaje(): void {

    console.log(this.nuevo.nombre.trim().length);

    if (this.nuevo.nombre.trim().length === 0) { return; } //No va a insertar nada;
    //console.log(this.nuevo);

    console.log(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    //this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: "",
      poder: 0
    }

  }

}
