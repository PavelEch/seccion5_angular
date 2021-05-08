import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

//Lo único diferente en los servicios es el decorador
//este es de tipo injectable 

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: "Goku",
            poder: 15000,
        },
        {
            nombre: "Vegeta",
            poder: 13000
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes]; //Envia una nueva copia de los personajes en lugar de la referencia al objeto real
    }


    constructor() { }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }

}